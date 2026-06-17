const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { URL } = require("node:url");
const { createStore } = require("./src/store");

const PORT = Number(process.env.PORT || 4173);
const COOKIE_NAME = "sl_session";
const PUBLIC_DIR = path.join(__dirname, "public");

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "content-length": Buffer.byteLength(body)
  });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        req.destroy();
        reject(new Error("Request body too large"));
      }
    });
    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
  });
}

function parseCookies(req) {
  return Object.fromEntries(
    (req.headers.cookie || "")
      .split(";")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const index = part.indexOf("=");
        return [part.slice(0, index), decodeURIComponent(part.slice(index + 1))];
      })
  );
}

function setSessionCookie(res, token) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  res.setHeader(
    "set-cookie",
    `${COOKIE_NAME}=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${60 * 60 * 24 * 30}${secure}`
  );
}

function clearSessionCookie(res) {
  res.setHeader("set-cookie", `${COOKIE_NAME}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0`);
}

function passwordHash(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `scrypt:${salt}:${hash}`;
}

function verifyPassword(password, stored) {
  const [scheme, salt, hash] = String(stored || "").split(":");
  if (scheme !== "scrypt" || !salt || !hash) return false;
  const expected = Buffer.from(hash, "hex");
  const actual = crypto.scryptSync(password, salt, 64);
  return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
}

function normalizeAuth(body) {
  const username = String(body.username || "").trim().toLowerCase();
  const password = String(body.password || "");
  if (!/^[a-z0-9_.-]{3,40}$/.test(username)) {
    return { error: "Username must be 3-40 characters: letters, numbers, dot, dash, or underscore." };
  }
  if (password.length < 6) {
    return { error: "Password must be at least 6 characters." };
  }
  return { username, password };
}

async function requireUser(req, res, store) {
  const token = parseCookies(req)[COOKIE_NAME];
  if (!token) {
    sendJson(res, 401, { error: "Not signed in" });
    return null;
  }
  const user = await store.getUserBySessionToken(token);
  if (!user) {
    clearSessionCookie(res);
    sendJson(res, 401, { error: "Session expired" });
    return null;
  }
  return { ...user, token };
}

function publicQuestion(question, answer) {
  const base = {
    id: question.id,
    courseId: question.courseId,
    sourceType: question.sourceType,
    phase: question.phase,
    topic: question.topic,
    type: question.type,
    question: question.question,
    options: question.options,
    sourceFile: question.sourceFile
  };
  if (answer) {
    base.chosenAnswer = answer.chosenAnswer;
    base.isCorrect = answer.isCorrect;
    base.correctAnswer = question.correctAnswer;
    base.explanation = question.explanation;
  }
  return base;
}

function shuffle(values) {
  const copy = values.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = crypto.randomInt(i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickQuestions(questions, size) {
  return shuffle(questions).slice(0, Math.min(size, questions.length));
}

function validateSize(value) {
  const size = Number(value);
  return [10, 15, 20].includes(size) ? size : 10;
}

function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const requested = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = path.normalize(path.join(PUBLIC_DIR, requested));
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    const ext = path.extname(filePath);
    const types = {
      ".html": "text/html; charset=utf-8",
      ".css": "text/css; charset=utf-8",
      ".js": "text/javascript; charset=utf-8",
      ".json": "application/json; charset=utf-8"
    };
    res.writeHead(200, { "content-type": types[ext] || "application/octet-stream" });
    res.end(content);
  });
}

async function handleApi(req, res, store) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathName = url.pathname;

  if (req.method === "POST" && pathName === "/api/auth/register") {
    const auth = normalizeAuth(await readBody(req));
    if (auth.error) return sendJson(res, 400, { error: auth.error });
    const existing = await store.getUserByUsername(auth.username);
    if (existing) return sendJson(res, 409, { error: "That username is already taken." });
    const user = await store.createUser(auth.username, passwordHash(auth.password));
    const token = crypto.randomUUID();
    await store.createLoginSession(token, user.id);
    setSessionCookie(res, token);
    return sendJson(res, 201, { user: { id: user.id, username: user.username } });
  }

  if (req.method === "POST" && pathName === "/api/auth/login") {
    const auth = normalizeAuth(await readBody(req));
    if (auth.error) return sendJson(res, 400, { error: auth.error });
    const user = await store.getUserByUsername(auth.username);
    if (!user || !verifyPassword(auth.password, user.passwordHash)) {
      return sendJson(res, 401, { error: "Username or password is incorrect." });
    }
    const token = crypto.randomUUID();
    await store.createLoginSession(token, user.id);
    setSessionCookie(res, token);
    return sendJson(res, 200, { user: { id: user.id, username: user.username } });
  }

  if (req.method === "POST" && pathName === "/api/auth/logout") {
    const token = parseCookies(req)[COOKIE_NAME];
    if (token) await store.deleteLoginSession(token);
    clearSessionCookie(res);
    return sendJson(res, 200, { ok: true });
  }

  if (req.method === "GET" && pathName === "/api/me") {
    const token = parseCookies(req)[COOKIE_NAME];
    const user = token ? await store.getUserBySessionToken(token) : null;
    return sendJson(res, 200, { user: user ? { id: user.id, username: user.username } : null });
  }

  const current = await requireUser(req, res, store);
  if (!current) return;

  if (req.method === "GET" && pathName === "/api/courses") {
    return sendJson(res, 200, { courses: await store.listCourses() });
  }

  if (req.method === "GET" && pathName === "/api/topics") {
    const courseId = url.searchParams.get("courseId") || "SL";
    const sourceType = url.searchParams.get("sourceType") || "lecture";
    return sendJson(res, 200, { topics: await store.listTopics(courseId, sourceType) });
  }

  if (req.method === "POST" && pathName === "/api/practice/start") {
    const body = await readBody(req);
    const courseId = String(body.courseId || "SL");
    const mode = String(body.mode || "mix");
    const size = validateSize(body.size);
    const topic = body.topic ? String(body.topic) : null;
    let questions = [];

    if (mode === "ultimate") {
      questions = await store.listQuestions({ courseId, sourceType: "priority" });
    } else if (mode === "past_exam") {
      questions = await store.listQuestions({ courseId, sourceType: "past_exam" });
    } else if (mode === "missed") {
      questions = await store.listMissedQuestions(current.id, courseId);
    } else if (mode === "topic") {
      if (!topic) return sendJson(res, 400, { error: "Choose a topic first." });
      questions = await store.listQuestions({ courseId, sourceType: "lecture", topic });
    } else {
      questions = await store.listQuestions({ courseId, sourceType: "lecture" });
    }

    if (!questions.length) {
      return sendJson(res, 404, { error: "No questions found for that practice mode." });
    }

    const picked = pickQuestions(questions, size);
    const session = await store.createPracticeSession({
      userId: current.id,
      courseId,
      mode,
      topic,
      size: picked.length,
      questionIds: picked.map((question) => question.id)
    });
    return sendJson(res, 201, { sessionId: session.id });
  }

  const sessionMatch = pathName.match(/^\/api\/practice\/sessions\/([^/]+)$/);
  if (req.method === "GET" && sessionMatch) {
    const session = await store.getPracticeSession(current.id, sessionMatch[1]);
    if (!session) return sendJson(res, 404, { error: "Session not found." });
    const questions = await store.getQuestionsByIds(session.questionIds);
    const answers = await store.getSessionAnswers(current.id, session.id);
    const answerByQuestion = new Map(answers.map((answer) => [answer.questionId, answer]));
    return sendJson(res, 200, {
      session,
      questions: questions.map((question) => publicQuestion(question, answerByQuestion.get(question.id)))
    });
  }

  const answerMatch = pathName.match(/^\/api\/practice\/sessions\/([^/]+)\/answer$/);
  if (req.method === "POST" && answerMatch) {
    const session = await store.getPracticeSession(current.id, answerMatch[1]);
    if (!session) return sendJson(res, 404, { error: "Session not found." });
    const body = await readBody(req);
    const questionId = String(body.questionId || "");
    const chosenAnswer = String(body.answer || "");
    if (!session.questionIds.includes(questionId)) {
      return sendJson(res, 400, { error: "Question does not belong to this session." });
    }
    const question = (await store.getQuestionsByIds([questionId]))[0];
    if (!question) return sendJson(res, 404, { error: "Question not found." });
    const isCorrect = chosenAnswer === question.correctAnswer;
    const answer = await store.recordAnswer({
      sessionId: session.id,
      userId: current.id,
      questionId,
      chosenAnswer,
      isCorrect
    });
    return sendJson(res, 200, { question: publicQuestion(question, answer) });
  }

  const finishMatch = pathName.match(/^\/api\/practice\/sessions\/([^/]+)\/finish$/);
  if (req.method === "POST" && finishMatch) {
    const summary = await store.finishPracticeSession(current.id, finishMatch[1]);
    if (!summary) return sendJson(res, 404, { error: "Session not found." });
    return sendJson(res, 200, { summary });
  }

  if (req.method === "GET" && pathName === "/api/stats") {
    return sendJson(res, 200, await store.getStats(current.id));
  }

  if (req.method === "GET" && pathName === "/api/missed") {
    const courseId = url.searchParams.get("courseId") || "SL";
    const questions = await store.listMissedQuestions(current.id, courseId);
    return sendJson(res, 200, { questions: questions.map((question) => publicQuestion(question, { chosenAnswer: null, isCorrect: false })) });
  }

  sendJson(res, 404, { error: "API route not found." });
}

function createHttpServer(store) {
  return http.createServer((req, res) => {
    Promise.resolve()
      .then(() => {
        if (req.url.startsWith("/api/")) return handleApi(req, res, store);
        return serveStatic(req, res);
      })
      .catch((error) => {
        console.error(error);
        sendJson(res, 500, { error: error.message || "Server error" });
      });
  });
}

async function startServer(port = PORT) {
  const store = await createStore();
  const server = createHttpServer(store);
  await new Promise((resolve) => server.listen(port, resolve));
  const actualPort = server.address().port;
  console.log(`SL study app running on http://localhost:${actualPort}`);
  console.log(`Storage: ${process.env.DATABASE_URL ? "Postgres" : "local JSON"}`);
  return { server, store };
}

if (require.main === module) {
  startServer().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = { createHttpServer, startServer };

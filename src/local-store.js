const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");
const { loadSeedQuestions } = require("./question-loader");

const DATA_DIR = path.join(__dirname, "..", "data");
const DATA_FILE = path.join(DATA_DIR, "local-store.json");

class LocalStore {
  async init() {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      const raw = await fs.readFile(DATA_FILE, "utf8");
      this.db = JSON.parse(raw);
    } catch {
      this.db = {
        users: [],
        loginSessions: [],
        questions: loadSeedQuestions(),
        practiceSessions: [],
        sessionAnswers: []
      };
      await this.save();
    }
    const seedQuestions = loadSeedQuestions();
    if (
      !this.db.questions?.length ||
      this.db.questions.length !== seedQuestions.length ||
      this.db.questions.some((question) => !question.options?.length || !question.correctAnswer)
    ) {
      this.db.questions = seedQuestions;
      await this.save();
    }
  }

  async save() {
    await fs.writeFile(DATA_FILE, JSON.stringify(this.db, null, 2));
  }

  async getUserByUsername(username) {
    return this.db.users.find((user) => user.username === username) || null;
  }

  async createUser(username, passwordHash) {
    const user = { id: crypto.randomUUID(), username, passwordHash, createdAt: new Date().toISOString() };
    this.db.users.push(user);
    await this.save();
    return user;
  }

  async createLoginSession(token, userId) {
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
    this.db.loginSessions.push({ token, userId, expiresAt, createdAt: new Date().toISOString() });
    await this.save();
  }

  async getUserBySessionToken(token) {
    const now = new Date();
    const session = this.db.loginSessions.find((item) => item.token === token && new Date(item.expiresAt) > now);
    if (!session) return null;
    const user = this.db.users.find((item) => item.id === session.userId);
    return user || null;
  }

  async deleteLoginSession(token) {
    this.db.loginSessions = this.db.loginSessions.filter((item) => item.token !== token);
    await this.save();
  }

  async listCourses() {
    return [{ id: "SL", name: "Script Languages", code: "SL" }];
  }

  async listTopics(courseId, sourceType = "lecture") {
    const counts = new Map();
    for (const question of this.db.questions) {
      if (question.courseId !== courseId || question.sourceType !== sourceType) continue;
      counts.set(question.topic, (counts.get(question.topic) || 0) + 1);
    }
    return Array.from(counts, ([topic, count]) => ({ topic, count })).sort((a, b) => a.topic.localeCompare(b.topic));
  }

  async listQuestions({ courseId, sourceType, topic }) {
    return this.db.questions.filter((question) => {
      if (courseId && question.courseId !== courseId) return false;
      if (sourceType && question.sourceType !== sourceType) return false;
      if (topic && question.topic !== topic) return false;
      return true;
    });
  }

  async getQuestionsByIds(ids) {
    const byId = new Map(this.db.questions.map((question) => [question.id, question]));
    return ids.map((id) => byId.get(id)).filter(Boolean);
  }

  async createPracticeSession({ userId, courseId, mode, topic, size, questionIds }) {
    const session = {
      id: crypto.randomUUID(),
      userId,
      courseId,
      mode,
      topic,
      size,
      questionIds,
      createdAt: new Date().toISOString(),
      completedAt: null
    };
    this.db.practiceSessions.push(session);
    await this.save();
    return session;
  }

  async getPracticeSession(userId, sessionId) {
    return this.db.practiceSessions.find((session) => session.id === sessionId && session.userId === userId) || null;
  }

  async getSessionAnswers(userId, sessionId) {
    return this.db.sessionAnswers.filter((answer) => answer.userId === userId && answer.sessionId === sessionId);
  }

  async recordAnswer({ sessionId, userId, questionId, chosenAnswer, isCorrect }) {
    const existing = this.db.sessionAnswers.find((answer) => answer.sessionId === sessionId && answer.questionId === questionId);
    const payload = {
      sessionId,
      userId,
      questionId,
      chosenAnswer,
      isCorrect,
      answeredAt: new Date().toISOString()
    };
    if (existing) Object.assign(existing, payload);
    else this.db.sessionAnswers.push(payload);
    await this.save();
    return payload;
  }

  async finishPracticeSession(userId, sessionId) {
    const session = await this.getPracticeSession(userId, sessionId);
    if (!session) return null;
    session.completedAt = new Date().toISOString();
    const answers = await this.getSessionAnswers(userId, sessionId);
    const correct = answers.filter((answer) => answer.isCorrect).length;
    await this.save();
    return {
      sessionId,
      total: session.questionIds.length,
      answered: answers.length,
      correct,
      percent: session.questionIds.length ? Math.round((correct / session.questionIds.length) * 100) : 0
    };
  }

  async listMissedQuestions(userId, courseId) {
    const missedIds = new Set(
      this.db.sessionAnswers
        .filter((answer) => answer.userId === userId && !answer.isCorrect)
        .map((answer) => answer.questionId)
    );
    return this.db.questions.filter((question) => question.courseId === courseId && missedIds.has(question.id));
  }

  async getStats(userId) {
    const questionById = new Map(this.db.questions.map((question) => [question.id, question]));
    const sessions = this.db.practiceSessions
      .filter((session) => session.userId === userId)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const answers = this.db.sessionAnswers.filter((answer) => answer.userId === userId);
    return buildStats(sessions, answers, questionById);
  }
}

function buildStats(sessions, answers, questionById) {
  const answersBySession = new Map();
  for (const answer of answers) {
    if (!answersBySession.has(answer.sessionId)) answersBySession.set(answer.sessionId, []);
    answersBySession.get(answer.sessionId).push(answer);
  }
  const recentSessions = sessions.slice(0, 12).map((session) => {
    const sessionAnswers = answersBySession.get(session.id) || [];
    const correct = sessionAnswers.filter((answer) => answer.isCorrect).length;
    return {
      id: session.id,
      mode: session.mode,
      topic: session.topic,
      total: session.questionIds.length,
      answered: sessionAnswers.length,
      correct,
      percent: session.questionIds.length ? Math.round((correct / session.questionIds.length) * 100) : 0,
      createdAt: session.createdAt,
      completedAt: session.completedAt
    };
  });

  const topics = new Map();
  for (const answer of answers) {
    const question = questionById.get(answer.questionId);
    if (!question) continue;
    const key = question.topic;
    if (!topics.has(key)) topics.set(key, { topic: key, answered: 0, correct: 0, missed: 0 });
    const row = topics.get(key);
    row.answered += 1;
    if (answer.isCorrect) row.correct += 1;
    else row.missed += 1;
  }

  const topicStats = Array.from(topics.values())
    .map((topic) => ({
      ...topic,
      percent: topic.answered ? Math.round((topic.correct / topic.answered) * 100) : 0
    }))
    .sort((a, b) => a.percent - b.percent || b.answered - a.answered);

  const totalAnswered = answers.length;
  const totalCorrect = answers.filter((answer) => answer.isCorrect).length;
  return {
    overview: {
      sessions: sessions.length,
      answered: totalAnswered,
      correct: totalCorrect,
      percent: totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : 0,
      missed: totalAnswered - totalCorrect
    },
    recentSessions,
    topicStats
  };
}

module.exports = { LocalStore, buildStats };

const app = document.querySelector("#app");

const state = {
  user: null,
  courseId: "SL",
  tab: "practice",
  mode: "mix",
  size: 10,
  topic: "",
  topics: [],
  stats: null,
  missed: [],
  session: null,
  questions: [],
  index: 0,
  error: ""
};

async function api(path, options = {}) {
  const response = await fetch(path, {
    headers: { "content-type": "application/json", ...(options.headers || {}) },
    credentials: "same-origin",
    ...options,
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || "Request failed");
  return payload;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function fmtDate(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

function optionClass(question, option) {
  if (!question.chosenAnswer) return "";
  if (option.key === question.correctAnswer) return "correct";
  if (option.key === question.chosenAnswer && !question.isCorrect) return "wrong";
  return "";
}

function render() {
  if (!state.user) return renderAuth();
  if (state.session) return renderQuiz();
  return renderShell();
}

function renderAuth() {
  app.innerHTML = `
    <section class="auth-wrap">
      <div class="auth-card">
        <h1>SL Practice</h1>
        <p>Sign in to keep your sessions, topic scores, and missed questions together.</p>
        <form class="form-grid" id="auth-form">
          <label>Username
            <input name="username" autocomplete="username" minlength="3" required>
          </label>
          <label>Password
            <input name="password" type="password" autocomplete="current-password" minlength="6" required>
          </label>
          <button class="btn primary" name="intent" value="login">Log in</button>
          <button class="link-btn" name="intent" value="register">Create account</button>
          ${state.error ? `<p class="error">${escapeHtml(state.error)}</p>` : ""}
        </form>
      </div>
    </section>
  `;
  document.querySelector("#auth-form").addEventListener("submit", onAuth);
}

function renderShell() {
  app.innerHTML = `
    <section class="shell">
      <header class="topbar">
        <div class="brand">
          <h1>SL Practice</h1>
          <span>${escapeHtml(state.user.username)} · ${escapeHtml(state.courseId)}</span>
        </div>
        <div class="top-actions">
          <select id="course-select" aria-label="Course">
            <option value="SL">SL · Script Languages</option>
          </select>
          <button class="btn ghost" id="logout">Log out</button>
        </div>
      </header>
      <nav class="tabs">
        ${tabButton("practice", "Practice")}
        ${tabButton("past", "Past Exam")}
        ${tabButton("missed", "Missed")}
        ${tabButton("stats", "Scores")}
      </nav>
      ${state.tab === "practice" ? practiceView() : ""}
      ${state.tab === "past" ? pastView() : ""}
      ${state.tab === "missed" ? missedView() : ""}
      ${state.tab === "stats" ? statsView() : ""}
    </section>
  `;
  bindShell();
}

function tabButton(id, label) {
  return `<button class="tab ${state.tab === id ? "active" : ""}" data-tab="${id}">${label}</button>`;
}

function sizeSegments() {
  return `
    <div class="segmented" role="group" aria-label="Set size">
      ${[10, 15, 20].map((size) => `<button class="segment ${state.size === size ? "active" : ""}" data-size="${size}">${size}</button>`).join("")}
    </div>
  `;
}

function practiceView() {
  return `
    <section class="grid">
      <aside class="panel">
        <h2>Practice</h2>
        <div class="setup">
          <label>Mode
            <select id="mode-select">
              <option value="mix" ${state.mode === "mix" ? "selected" : ""}>Mix all slide topics</option>
              <option value="topic" ${state.mode === "topic" ? "selected" : ""}>One topic</option>
            </select>
          </label>
          <label class="${state.mode === "topic" ? "" : "muted"}">Topic
            <select id="topic-select" ${state.mode === "topic" ? "" : "disabled"}>
              <option value="">Choose topic</option>
              ${state.topics.map((item) => `<option value="${escapeHtml(item.topic)}" ${state.topic === item.topic ? "selected" : ""}>${escapeHtml(item.topic)} (${item.count})</option>`).join("")}
            </select>
          </label>
          <label>Questions per set
            ${sizeSegments()}
          </label>
          <button class="btn primary" id="start-practice">Start set</button>
          ${state.error ? `<p class="error">${escapeHtml(state.error)}</p>` : ""}
        </div>
      </aside>
      <div class="panel">
        <h2>Topic Snapshot</h2>
        ${topicList()}
      </div>
    </section>
  `;
}

function topicList() {
  if (!state.topics.length) return `<div class="empty">No topics loaded.</div>`;
  return `
    <div class="list">
      ${state.topics.slice(0, 18).map((item) => `
        <div class="row-card">
          <header>
            <h4>${escapeHtml(item.topic)}</h4>
            <span class="pill info">${item.count} questions</span>
          </header>
        </div>
      `).join("")}
    </div>
  `;
}

function pastView() {
  return `
    <section class="grid">
      <aside class="panel">
        <h2>Past Exam</h2>
        <div class="setup">
          <label>Questions per set
            ${sizeSegments()}
          </label>
          <button class="btn primary" id="start-past">Start past exam set</button>
          ${state.error ? `<p class="error">${escapeHtml(state.error)}</p>` : ""}
        </div>
      </aside>
      <div class="panel">
        <h2>Thomas Bank</h2>
        <div class="stats-row">
          <div class="metric"><strong>17</strong><span>seed questions</span></div>
          <div class="metric"><strong>TF</strong><span>true/false format</span></div>
          <div class="metric"><strong>PDF</strong><span>source screenshots</span></div>
          <div class="metric"><strong>SL</strong><span>Python semantics</span></div>
        </div>
      </div>
    </section>
  `;
}

function missedView() {
  return `
    <section class="grid">
      <aside class="panel">
        <h2>Missed</h2>
        <div class="setup">
          <label>Questions per set
            ${sizeSegments()}
          </label>
          <button class="btn warn" id="start-missed" ${state.missed.length ? "" : "disabled"}>Review missed</button>
        </div>
      </aside>
      <div class="panel">
        <h2>Missed Questions</h2>
        ${state.missed.length ? `
          <div class="list">
            ${state.missed.map((question) => `
              <div class="row-card">
                <header>
                  <h4>${escapeHtml(question.topic)}</h4>
                  <span class="pill bad">missed</span>
                </header>
                <p>${escapeHtml(question.question)}</p>
              </div>
            `).join("")}
          </div>
        ` : `<div class="empty">Missed questions will appear after a practice answer is incorrect.</div>`}
      </div>
    </section>
  `;
}

function statsView() {
  const stats = state.stats;
  if (!stats) return `<div class="panel"><div class="empty">Scores are loading.</div></div>`;
  return `
    <section class="panel">
      <h2>Scores</h2>
      <div class="stats-row">
        <div class="metric"><strong>${stats.overview.sessions}</strong><span>sessions</span></div>
        <div class="metric"><strong>${stats.overview.answered}</strong><span>answered</span></div>
        <div class="metric"><strong>${stats.overview.percent}%</strong><span>accuracy</span></div>
        <div class="metric"><strong>${stats.overview.missed}</strong><span>missed</span></div>
      </div>
      <h3>Recent Sessions</h3>
      ${stats.recentSessions.length ? `
        <div class="list">
          ${stats.recentSessions.map((session) => `
            <div class="row-card">
              <header>
                <h4>${escapeHtml(session.mode.replace("_", " "))}${session.topic ? ` · ${escapeHtml(session.topic)}` : ""}</h4>
                <span class="pill ${session.percent >= 70 ? "good" : "bad"}">${session.correct}/${session.total} · ${session.percent}%</span>
              </header>
              <p class="muted">${fmtDate(session.createdAt)}</p>
            </div>
          `).join("")}
        </div>
      ` : `<div class="empty">No sessions yet.</div>`}
      <h3>Topics</h3>
      ${stats.topicStats.length ? `
        <table class="table">
          <thead><tr><th>Topic</th><th>Answered</th><th>Correct</th><th>Accuracy</th></tr></thead>
          <tbody>
            ${stats.topicStats.map((topic) => `
              <tr>
                <td>${escapeHtml(topic.topic)}</td>
                <td>${topic.answered}</td>
                <td>${topic.correct}</td>
                <td><span class="pill ${topic.percent >= 70 ? "good" : "bad"}">${topic.percent}%</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      ` : `<div class="empty">Topic scores appear after you answer questions.</div>`}
    </section>
  `;
}

function renderQuiz() {
  const question = state.questions[state.index];
  const answered = state.questions.filter((item) => item.chosenAnswer).length;
  const width = Math.round((answered / state.questions.length) * 100);
  app.innerHTML = `
    <section class="shell quiz-wrap">
      <header class="topbar">
        <div class="brand">
          <h1>${escapeHtml(state.session.mode.replace("_", " "))}</h1>
          <span>${state.index + 1} of ${state.questions.length}</span>
        </div>
        <button class="btn ghost" id="exit-session">Exit</button>
      </header>
      <article class="quiz-card">
        <div class="progress">
          <div class="bar"><span style="width:${width}%"></span></div>
          <span class="pill">${answered}/${state.questions.length}</span>
        </div>
        <p class="muted">${escapeHtml(question.topic)}${question.sourceFile ? ` · ${escapeHtml(question.sourceFile)}` : ""}</p>
        <h2 class="question-text">${escapeHtml(question.question)}</h2>
        <div class="options">
          ${question.options.map((option) => `
            <button class="option ${optionClass(question, option)}" data-answer="${escapeHtml(option.key)}" ${question.chosenAnswer ? "disabled" : ""}>
              <span class="key">${escapeHtml(option.key)}</span>
              <span>${escapeHtml(option.text)}</span>
            </button>
          `).join("")}
        </div>
        ${question.chosenAnswer ? `
          <div class="explain">
            <strong>${question.isCorrect ? "Correct" : `Correct answer: ${escapeHtml(question.correctAnswer)}`}</strong>
            <p>${escapeHtml(question.explanation)}</p>
          </div>
        ` : ""}
        <div class="quiz-actions">
          <button class="btn ghost" id="prev-question" ${state.index === 0 ? "disabled" : ""}>Previous</button>
          ${state.index === state.questions.length - 1
            ? `<button class="btn primary" id="finish-session" ${answered === state.questions.length ? "" : "disabled"}>Finish</button>`
            : `<button class="btn primary" id="next-question" ${question.chosenAnswer ? "" : "disabled"}>Next</button>`}
        </div>
      </article>
    </section>
  `;
  bindQuiz();
}

function bindShell() {
  document.querySelector("#logout").addEventListener("click", logout);
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", async () => {
      state.tab = button.dataset.tab;
      state.error = "";
      await hydrateForTab();
      render();
    });
  });
  document.querySelectorAll("[data-size]").forEach((button) => {
    button.addEventListener("click", () => {
      state.size = Number(button.dataset.size);
      render();
    });
  });
  document.querySelector("#mode-select")?.addEventListener("change", (event) => {
    state.mode = event.target.value;
    render();
  });
  document.querySelector("#topic-select")?.addEventListener("change", (event) => {
    state.topic = event.target.value;
  });
  document.querySelector("#start-practice")?.addEventListener("click", () => startPractice(state.mode));
  document.querySelector("#start-past")?.addEventListener("click", () => startPractice("past_exam"));
  document.querySelector("#start-missed")?.addEventListener("click", () => startPractice("missed"));
}

function bindQuiz() {
  document.querySelector("#exit-session").addEventListener("click", async () => {
    state.session = null;
    state.questions = [];
    await hydrateForTab();
    render();
  });
  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => answerQuestion(button.dataset.answer));
  });
  document.querySelector("#prev-question")?.addEventListener("click", () => {
    state.index = Math.max(0, state.index - 1);
    render();
  });
  document.querySelector("#next-question")?.addEventListener("click", () => {
    state.index = Math.min(state.questions.length - 1, state.index + 1);
    render();
  });
  document.querySelector("#finish-session")?.addEventListener("click", finishSession);
}

async function onAuth(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const intent = event.submitter?.value || "login";
  state.error = "";
  try {
    const payload = await api(`/api/auth/${intent}`, {
      method: "POST",
      body: {
        username: form.get("username"),
        password: form.get("password")
      }
    });
    state.user = payload.user;
    await hydrate();
    render();
  } catch (error) {
    state.error = error.message;
    render();
  }
}

async function logout() {
  await api("/api/auth/logout", { method: "POST" });
  Object.assign(state, { user: null, session: null, stats: null, missed: [], error: "" });
  render();
}

async function hydrate() {
  const topics = await api(`/api/topics?courseId=${encodeURIComponent(state.courseId)}&sourceType=lecture`);
  state.topics = topics.topics;
  if (!state.topic && state.topics[0]) state.topic = state.topics[0].topic;
  await hydrateForTab();
}

async function hydrateForTab() {
  if (state.tab === "stats") {
    state.stats = await api("/api/stats");
  }
  if (state.tab === "missed") {
    const payload = await api(`/api/missed?courseId=${encodeURIComponent(state.courseId)}`);
    state.missed = payload.questions;
  }
}

async function startPractice(mode) {
  state.error = "";
  try {
    const payload = await api("/api/practice/start", {
      method: "POST",
      body: {
        courseId: state.courseId,
        mode,
        topic: mode === "topic" ? state.topic : null,
        size: state.size
      }
    });
    const sessionPayload = await api(`/api/practice/sessions/${payload.sessionId}`);
    state.session = sessionPayload.session;
    state.questions = sessionPayload.questions;
    state.index = 0;
    render();
  } catch (error) {
    state.error = error.message;
    render();
  }
}

async function answerQuestion(answer) {
  const question = state.questions[state.index];
  const payload = await api(`/api/practice/sessions/${state.session.id}/answer`, {
    method: "POST",
    body: { questionId: question.id, answer }
  });
  state.questions[state.index] = payload.question;
  render();
}

async function finishSession() {
  await api(`/api/practice/sessions/${state.session.id}/finish`, { method: "POST" });
  state.session = null;
  state.questions = [];
  state.tab = "stats";
  await hydrateForTab();
  render();
}

async function boot() {
  try {
    const me = await api("/api/me");
    state.user = me.user;
    if (state.user) await hydrate();
  } catch {
    state.user = null;
  }
  render();
}

boot();

const { Pool } = require("pg");
const crypto = require("node:crypto");
const { loadSeedQuestions } = require("./question-loader");
const { buildStats } = require("./local-store");

class PostgresStore {
  constructor(connectionString) {
    this.pool = new Pool({
      connectionString,
      ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : undefined
    });
  }

  async init() {
    await this.pool.query(`
      create table if not exists users (
        id uuid primary key,
        username text unique not null,
        password_hash text not null,
        created_at timestamptz not null default now()
      );
      create table if not exists login_sessions (
        token text primary key,
        user_id uuid not null references users(id) on delete cascade,
        expires_at timestamptz not null,
        created_at timestamptz not null default now()
      );
      create table if not exists questions (
        id text primary key,
        course_id text not null,
        source_type text not null,
        phase text,
        topic text not null,
        type text not null,
        question text not null,
        options jsonb not null,
        correct_answer text not null,
        explanation text not null,
        source_file text,
        source_ref text
      );
      create table if not exists practice_sessions (
        id uuid primary key,
        user_id uuid not null references users(id) on delete cascade,
        course_id text not null,
        mode text not null,
        topic text,
        size integer not null,
        question_ids text[] not null,
        created_at timestamptz not null default now(),
        completed_at timestamptz
      );
      create table if not exists session_answers (
        session_id uuid not null references practice_sessions(id) on delete cascade,
        user_id uuid not null references users(id) on delete cascade,
        question_id text not null references questions(id) on delete cascade,
        chosen_answer text not null,
        is_correct boolean not null,
        answered_at timestamptz not null default now(),
        primary key (session_id, question_id)
      );
    `);
    await this.seedQuestions();
  }

  async seedQuestions() {
    const questions = loadSeedQuestions();
    const client = await this.pool.connect();
    try {
      await client.query("begin");
      for (const question of questions) {
        await client.query(
          `insert into questions
            (id, course_id, source_type, phase, topic, type, question, options, correct_answer, explanation, source_file, source_ref)
           values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
           on conflict (id) do update set
             course_id = excluded.course_id,
             source_type = excluded.source_type,
             phase = excluded.phase,
             topic = excluded.topic,
             type = excluded.type,
             question = excluded.question,
             options = excluded.options,
             correct_answer = excluded.correct_answer,
             explanation = excluded.explanation,
             source_file = excluded.source_file,
             source_ref = excluded.source_ref`,
          [
            question.id,
            question.courseId,
            question.sourceType,
            question.phase,
            question.topic,
            question.type,
            question.question,
            JSON.stringify(question.options),
            question.correctAnswer,
            question.explanation,
            question.sourceFile,
            question.sourceRef
          ]
        );
      }
      await client.query("commit");
    } catch (error) {
      await client.query("rollback");
      throw error;
    } finally {
      client.release();
    }
  }

  rowQuestion(row) {
    return {
      id: row.id,
      courseId: row.course_id,
      sourceType: row.source_type,
      phase: row.phase,
      topic: row.topic,
      type: row.type,
      question: row.question,
      options: row.options,
      correctAnswer: row.correct_answer,
      explanation: row.explanation,
      sourceFile: row.source_file,
      sourceRef: row.source_ref
    };
  }

  rowSession(row) {
    return {
      id: row.id,
      userId: row.user_id,
      courseId: row.course_id,
      mode: row.mode,
      topic: row.topic,
      size: row.size,
      questionIds: row.question_ids,
      createdAt: row.created_at,
      completedAt: row.completed_at
    };
  }

  rowAnswer(row) {
    return {
      sessionId: row.session_id,
      userId: row.user_id,
      questionId: row.question_id,
      chosenAnswer: row.chosen_answer,
      isCorrect: row.is_correct,
      answeredAt: row.answered_at
    };
  }

  async getUserByUsername(username) {
    const { rows } = await this.pool.query("select id, username, password_hash from users where username = $1", [username]);
    return rows[0] ? { id: rows[0].id, username: rows[0].username, passwordHash: rows[0].password_hash } : null;
  }

  async createUser(username, passwordHash) {
    const { rows } = await this.pool.query(
      "insert into users (id, username, password_hash) values ($1, $2, $3) returning id, username, password_hash",
      [crypto.randomUUID(), username, passwordHash]
    );
    return { id: rows[0].id, username: rows[0].username, passwordHash: rows[0].password_hash };
  }

  async createLoginSession(token, userId) {
    await this.pool.query(
      "insert into login_sessions (token, user_id, expires_at) values ($1, $2, now() + interval '30 days')",
      [token, userId]
    );
  }

  async getUserBySessionToken(token) {
    const { rows } = await this.pool.query(
      `select users.id, users.username, users.password_hash
       from login_sessions join users on users.id = login_sessions.user_id
       where login_sessions.token = $1 and login_sessions.expires_at > now()`,
      [token]
    );
    return rows[0] ? { id: rows[0].id, username: rows[0].username, passwordHash: rows[0].password_hash } : null;
  }

  async deleteLoginSession(token) {
    await this.pool.query("delete from login_sessions where token = $1", [token]);
  }

  async listCourses() {
    return [{ id: "SL", name: "Script Languages", code: "SL" }];
  }

  async listTopics(courseId, sourceType = "lecture") {
    const { rows } = await this.pool.query(
      `select topic, count(*)::int as count
       from questions
       where course_id = $1 and source_type = $2
       group by topic
       order by topic`,
      [courseId, sourceType]
    );
    return rows;
  }

  async listQuestions({ courseId, sourceType, topic }) {
    const clauses = [];
    const values = [];
    if (courseId) {
      values.push(courseId);
      clauses.push(`course_id = $${values.length}`);
    }
    if (sourceType) {
      values.push(sourceType);
      clauses.push(`source_type = $${values.length}`);
    }
    if (topic) {
      values.push(topic);
      clauses.push(`topic = $${values.length}`);
    }
    const where = clauses.length ? `where ${clauses.join(" and ")}` : "";
    const { rows } = await this.pool.query(`select * from questions ${where}`, values);
    return rows.map((row) => this.rowQuestion(row));
  }

  async getQuestionsByIds(ids) {
    if (!ids.length) return [];
    const { rows } = await this.pool.query("select * from questions where id = any($1::text[])", [ids]);
    const byId = new Map(rows.map((row) => [row.id, this.rowQuestion(row)]));
    return ids.map((id) => byId.get(id)).filter(Boolean);
  }

  async createPracticeSession({ userId, courseId, mode, topic, size, questionIds }) {
    const { rows } = await this.pool.query(
      `insert into practice_sessions (id, user_id, course_id, mode, topic, size, question_ids)
       values ($1, $2, $3, $4, $5, $6, $7)
       returning *`,
      [crypto.randomUUID(), userId, courseId, mode, topic, size, questionIds]
    );
    return this.rowSession(rows[0]);
  }

  async getPracticeSession(userId, sessionId) {
    const { rows } = await this.pool.query("select * from practice_sessions where user_id = $1 and id = $2", [userId, sessionId]);
    return rows[0] ? this.rowSession(rows[0]) : null;
  }

  async getSessionAnswers(userId, sessionId) {
    const { rows } = await this.pool.query("select * from session_answers where user_id = $1 and session_id = $2", [userId, sessionId]);
    return rows.map((row) => this.rowAnswer(row));
  }

  async recordAnswer({ sessionId, userId, questionId, chosenAnswer, isCorrect }) {
    const { rows } = await this.pool.query(
      `insert into session_answers (session_id, user_id, question_id, chosen_answer, is_correct)
       values ($1, $2, $3, $4, $5)
       on conflict (session_id, question_id)
       do update set chosen_answer = excluded.chosen_answer, is_correct = excluded.is_correct, answered_at = now()
       returning *`,
      [sessionId, userId, questionId, chosenAnswer, isCorrect]
    );
    return this.rowAnswer(rows[0]);
  }

  async finishPracticeSession(userId, sessionId) {
    const session = await this.getPracticeSession(userId, sessionId);
    if (!session) return null;
    await this.pool.query("update practice_sessions set completed_at = now() where user_id = $1 and id = $2", [userId, sessionId]);
    const answers = await this.getSessionAnswers(userId, sessionId);
    const correct = answers.filter((answer) => answer.isCorrect).length;
    return {
      sessionId,
      total: session.questionIds.length,
      answered: answers.length,
      correct,
      percent: session.questionIds.length ? Math.round((correct / session.questionIds.length) * 100) : 0
    };
  }

  async listMissedQuestions(userId, courseId) {
    const { rows } = await this.pool.query(
      `select distinct questions.*
       from questions
       join session_answers on session_answers.question_id = questions.id
       where session_answers.user_id = $1
         and session_answers.is_correct = false
         and questions.course_id = $2
       order by questions.topic, questions.id`,
      [userId, courseId]
    );
    return rows.map((row) => this.rowQuestion(row));
  }

  async getStats(userId) {
    const sessionsResult = await this.pool.query("select * from practice_sessions where user_id = $1 order by created_at desc", [userId]);
    const answersResult = await this.pool.query("select * from session_answers where user_id = $1", [userId]);
    const questionsResult = await this.pool.query(
      `select questions.*
       from questions
       join session_answers on session_answers.question_id = questions.id
       where session_answers.user_id = $1`,
      [userId]
    );
    const questionById = new Map(questionsResult.rows.map((row) => [row.id, this.rowQuestion(row)]));
    return buildStats(
      sessionsResult.rows.map((row) => this.rowSession(row)),
      answersResult.rows.map((row) => this.rowAnswer(row)),
      questionById
    );
  }
}

module.exports = { PostgresStore };

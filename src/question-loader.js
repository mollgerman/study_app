const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.join(__dirname, "..");
const QUESTION_BANK = path.join(ROOT, "sl_exam_master_question_bank.json");
const PRIORITY_BANK = path.join(ROOT, "sl_exam_200_priority_app_import_explained.json");

function optionList(question) {
  if (question.options && typeof question.options === "object") {
    if (Array.isArray(question.options)) {
      return question.options.map((text) => ({
        key: String(text),
        text: String(text)
      }));
    }
    return Object.entries(question.options).map(([key, text]) => ({
      key,
      text: String(text)
    }));
  }
  if (question.choices && typeof question.choices === "object") {
    if (Array.isArray(question.choices)) {
      return question.choices.map((choice) => {
        if (choice && typeof choice === "object") {
          return {
            key: String(choice.key),
            text: String(choice.text)
          };
        }
        return {
          key: String(choice),
          text: String(choice)
        };
      });
    }
    return Object.entries(question.choices).map(([key, text]) => ({
      key,
      text: String(text)
    }));
  }
  if (question.type === "true_false") {
    return [
      { key: "True", text: "True" },
      { key: "False", text: "False" }
    ];
  }
  return [];
}

function correctAnswer(question) {
  if (question.correct_answer !== undefined && question.correct_answer !== null) {
    return String(question.correct_answer);
  }
  if (question.correct_choice !== undefined && question.correct_choice !== null) {
    return String(question.correct_choice);
  }
  if (question.correctKey !== undefined && question.correctKey !== null) {
    return String(question.correctKey);
  }
  if (question.answer !== undefined && question.answer !== null) {
    return String(question.answer);
  }
  return "";
}

function sourceType(question) {
  if (question.source_file === "Sc_lang_thomas.pdf" || question.quiz_question_no) {
    return "past_exam";
  }
  return "lecture";
}

function phaseValue(question) {
  if (question.phase === undefined || question.phase === null || question.phase === "") {
    return sourceType(question) === "past_exam" ? "Past exam" : "General";
  }
  return String(question.phase);
}

function questionId(question, index) {
  if (question.id) return String(question.id);
  if (question.quiz_question_no) return `THOMAS-Q${String(question.quiz_question_no).padStart(3, "0")}`;
  return `SL-Q${String(index + 1).padStart(4, "0")}`;
}

function loadSeedQuestions() {
  const bank = JSON.parse(fs.readFileSync(QUESTION_BANK, "utf8"));
  const questions = bank.questions.map((question, index) => ({
    id: questionId(question, index),
    courseId: "SL",
    sourceType: sourceType(question),
    phase: phaseValue(question),
    topic: String(question.topic || "General"),
    type: String(question.type || "single_choice"),
    question: String(question.question || ""),
    options: optionList(question),
    correctAnswer: correctAnswer(question),
    explanation: String(question.explanation || "Review the related lecture note for the rule behind this answer."),
    sourceFile: question.source_file ? String(question.source_file) : null,
    sourceRef: question.quiz_question_no ? `Quiz question ${question.quiz_question_no}` : null
  }));

  if (fs.existsSync(PRIORITY_BANK)) {
    const priorityQuestions = JSON.parse(fs.readFileSync(PRIORITY_BANK, "utf8"));
    questions.push(
      ...priorityQuestions.map((question, index) => ({
        id: questionId(question, index),
        courseId: "SL",
        sourceType: "priority",
        phase: String(question.group || "Ultimate"),
        topic: String(question.topic || "Priority review"),
        type: "single_choice",
        question: String(question.question || ""),
        options: optionList(question),
        correctAnswer: correctAnswer(question),
        explanation: String(question.explanation || question.whyCorrect || question.simpleExplanation || "Review the rule behind this answer."),
        sourceFile: "sl_exam_200_priority_app_import_explained.json",
        sourceRef: question.group ? String(question.group) : null
      }))
    );
  }

  return questions;
}

module.exports = { loadSeedQuestions };

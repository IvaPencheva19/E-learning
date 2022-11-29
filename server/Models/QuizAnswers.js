const mongoose = require("mongoose");

const quizAnswersSchema = new mongoose.Schema({
  student: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  quiz: {
    type: mongoose.Types.ObjectId,
    ref: "Quiz",
  },
  answers: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Answer",
    },
  ],
});

const QuizAnswers = mongoose.model("QuizAnswers", quizAnswersSchema);

module.exports = QuizAnswers;

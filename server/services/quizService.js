const Quiz = require("../models/Quiz");

exports.create = (quizData) => Quiz.create(quizData);
exports.findById = (quizId) =>
  Quiz.findById(quizId).populate({
    path: "questions",
    populate: [{ path: "answers" }],
  });
exports.findByIdAndRemove = (quizId) => Quiz.findByIdAndRemove(quizId);

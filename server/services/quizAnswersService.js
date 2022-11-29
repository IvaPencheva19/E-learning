const QuizAnswers = require("../models/QuizAnswers");
const ObjectID = require("mongodb").ObjectId;

exports.create = (quizAnswersData) => QuizAnswers.create(quizAnswersData);
exports.findById = (quizAnswersId) => QuizAnswers.findById(quizAnswersId);
exports.findByIdAndRemove = (quizId) => QuizAnswers.findByIdAndRemove(quizId);
exports.findStudentResult = (idQuiz, idUser) =>
  QuizAnswers.find({
    student: new ObjectID(idUser),
    quiz: new ObjectID(idQuiz),
  }).populate("answers");

exports.findStudentAllResults = (idUser) =>
  QuizAnswers.find({
    student: new ObjectID(idUser),
  }).populate("quiz");

const Question = require("../models/Question");

exports.create = (questionData) => Question.create(questionData);
exports.findById = (questionId) => Question.findById(questionId);

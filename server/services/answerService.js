const Answer = require("../models/Answer");

exports.create = (answerData) => Answer.create(answerData);
exports.findById = (answerId) => Answer.findById(answerId);

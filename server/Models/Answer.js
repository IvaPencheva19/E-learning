const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  value: {
    type: String,
    required: [true, "Value is required"],
  },
  isCorrect: {
    type: Boolean,
    required: [true, "isCorrect is required"],
  },
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;

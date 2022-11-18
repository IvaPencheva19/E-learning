const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  value: {
    type: String,
    required: [true, "Value is required"],
  },
  isCorrect: {
    type: Boolean,
    required: [true, "isCorrect is required"],
  },
});

const Answer = mongoose.model("Answer", courseSchema);

module.exports = Answer;

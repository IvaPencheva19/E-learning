const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  questions: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Question",
    },
  ],
  startTime: {
    type: Date,
    required: [true, "Start date is required"],
    min: Date.now() - 24 * 60 * 60 * 1000,
  },
  endTime: {
    type: Date,
    required: [true, "Final date is required"],
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;

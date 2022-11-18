const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
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
  finalTime: {
    type: Date,
    required: [true, "Final date is required"],
  },
});

const Quiz = mongoose.model("Quiz", courseSchema);

module.exports = Quiz;

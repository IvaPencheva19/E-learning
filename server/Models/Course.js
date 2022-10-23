const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  subject: {
    type: String,
    required: [true, "Subject is required"],
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  startDate: {
    type: Date,
    required: [true, "Start date is required"],
    min: Date.now(),
  },
  finalDate: {
    type: Date,
    required: [true, "Final date is required"],
  },
  topics: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Topic",
    },
  ],
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;

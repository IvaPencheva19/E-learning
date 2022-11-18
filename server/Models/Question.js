const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  answers: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Answer",
    },
  ],
});

const Question = mongoose.model("Question", courseSchema);

module.exports = Question;

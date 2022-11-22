const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  answers: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Answer",
    },
  ],
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;

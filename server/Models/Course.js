const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
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
  topics: [Topic],
});

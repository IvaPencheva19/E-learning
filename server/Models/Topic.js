const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  materials: {
    type: [String],
  },
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = { Topic, topicSchema };

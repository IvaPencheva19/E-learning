const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  materials: {
    urls: [String],
  },
});

userSchema.pre("save", function (next) {
  bcrypt
    .hash(this.password, SALT_ROUNDS)
    .then((hashedPassword) => {
      this.password = hashedPassword;
      next();
    })
    .catch((err) => console.log(err));
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;

const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/env");

exports.create = async (userData) => {
  const { username, email } = userData;

  const usernameCheck = await User.findOne({ username: username });
  if (usernameCheck) {
    throw {
      message: `User with that username already exists!`,
    };
  }

  const emailCheck = await User.findOne({ email: email });
  if (emailCheck) {
    throw {
      message: `User with that email already exists!`,
    };
  }

  return User.create(userData);
};

exports.login = async (email, password) => {
  const user = await User.findOne({
    email,
  });

  if (!user) {
    throw {
      message: `Wrong email or password!`,
    };
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw {
      message: `Wrong email or password!`,
    };
  }

  return user;
};

exports.createUserToken = (user) => {
  const payload = {
    _id: user._id,
    subject: user.subject,
    role: user.role,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    imageUrl: user.imageUrl,
  };

  const options = {
    expiresIn: "3h",
  };

  const tokenPromise = new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET, options, (err, decodedToken) => {
      if (err) {
        return reject(err);
      }

      resolve(decodedToken);
    });
  });

  return tokenPromise;
};

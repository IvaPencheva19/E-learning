const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/env");

exports.create = (userData) => User.create(userData);

exports.login = async (email, password) => {
  const user = await User.findOne({
    email,
  });

  if (!user) {
    throw {
      message: `Can not find email or password!`,
    };
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw {
      message: `Can not find email or password!`,
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
  };

  const options = {
    expiresIn: "1d",
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

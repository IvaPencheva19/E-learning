const Course = require("../models/Course");
const User = require("../models/User");
const ObjectID = require("mongodb").ObjectId;
exports.addCourse = (id, courseId) =>
  User.updateOne(
    { _id: new ObjectID(id) },
    { $addToSet: { courses: courseId } }
  );

exports.find = (id) => User.findById(id);

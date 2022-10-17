const Course = require("../models/Course");

exports.create = (courseData) => Course.create(courseData);
exports.findById = (courseId) => Course.findById(courseId);
exports.update = (course) =>
  Course.updateOne({ _id: course._id }, { $set: course });

const Course = require("../models/Course");
const User = require("../models/User");
const ObjectID = require("mongodb").ObjectId;
exports.create = (courseData) => Course.create(courseData);
exports.findById = (courseId) => Course.findById(courseId).populate({ path: 'topics' }).lean();

exports.getAllTeacher = (id) => Course.find({ user: new ObjectID(id) }).lean();
exports.getAllStudent = (id) =>
  Course.find({ students: new ObjectID(id) }).lean();

exports.update = (course) =>
  Course.updateOne({ _id: course._id }, { $set: course });

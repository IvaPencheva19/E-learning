const Course = require("../models/Course");
const ObjectID = require("mongodb").ObjectId;
exports.create = (courseData) => Course.create(courseData);
exports.findById = (courseId) => Course.findById(courseId);

exports.getAll = (id) => {
  console.log(id);
  const objId = new ObjectID(id);
  console.log(objId);
  return Course.find({ user: new ObjectID(id) }).lean();
};

exports.update = (course) =>
  Course.updateOne({ _id: course._id }, { $set: course });

exports.update = (course) =>
  Course.updateOne({ _id: course._id }, { $set: course });

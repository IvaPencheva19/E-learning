const Course = require("../models/Course");

exports.create = (courseData) => {
  const course = Course.create(courseData);
  const promise = new Promise((resolve, reject) => {
    if (course) {
      resolve();
    } else {
      reject();
    }
    return promise;
  });
};
exports.findById = (courseId) => Course.findById(courseId);

exports.getAll = () => Course.find();

exports.update = (course) =>
  Course.updateOne({ _id: course._id }, { $set: course });

exports.update = (course) => Course.updateOne({ _id: course._id }, { $set: course });


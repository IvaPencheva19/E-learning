const Course = require("../models/Course");

exports.create = (courseData) => Course.create(courseData);

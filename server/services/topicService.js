const Topic = require("../models/Topic");

exports.create = (topicData) => Topic.create(topicData);
exports.findById = (topicId) => Topic.findById(topicId).lean();
exports.findByIdAndRemove = (topicId) => Topic.findByIdAndRemove(topicId);

exports.update = (topic) =>
  Topic.updateOne({ _id: topic._id }, { $set: topic });

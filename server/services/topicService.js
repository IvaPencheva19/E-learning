const Topic = require("../models/Topic");

exports.create = (topicData) => Topic.create(topicData);
exports.findById = (topicId) => Topic.findById(topicId).lean();

const Topic = require("../models/Topic");

exports.create = (topicData) => Topic.create(topicData);

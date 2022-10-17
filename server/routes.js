const express = require("express");
const router = express.Router();

const authController = require("./controllers/authController");
const courseController = require("./controllers/courseController");
const topicController = require("./controllers/topicController");

router.use("/auth", authController);
router.use("/course", courseController);
router.use("/topic", topicController);

module.exports = router;

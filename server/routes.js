const express = require("express");
const router = express.Router();

const authController = require("./controllers/authController");
const courseController = require("./controllers/courseController");
const topicController = require("./controllers/topicController");
const profileController = require("./controllers/profileController");
const quizController = require("./controllers/quizController");

router.use("/auth", authController);
router.use("/course", courseController);
router.use("/topic", topicController);
router.use("/quiz", quizController);

router.use("/profile", profileController);

module.exports = router;

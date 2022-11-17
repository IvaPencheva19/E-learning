const express = require("express");
const router = express.Router();

const authController = require("./controllers/authController");
const courseController = require("./controllers/courseController");
const topicController = require("./controllers/topicController");
const profileController = require("./controllers/profileController");

router.use("/auth", authController);
router.use("/course", courseController);
router.use("/topic", topicController);
router.use("/profile", profileController);

module.exports = router;

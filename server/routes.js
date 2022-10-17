const express = require("express");
const router = express.Router();

// const homeController = require('./controllers/homeController');
const authController = require("./controllers/authController");
const courseController = require("./controllers/courseController");
const topicController = require("./controllers/topicController");
// const cryptoController = require('./controllers/cryptoController');

// router.use(homeController);
console.log("router log");
router.use("/auth", authController);
router.use("/course", courseController);
router.use("/topic", topicController);
// router.use('/cryptos', cryptoController);

module.exports = router;

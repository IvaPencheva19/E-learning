const express = require("express");
const router = express.Router();

// const homeController = require('./controllers/homeController');
const authController = require("./controllers/authController");
// const cryptoController = require('./controllers/cryptoController');

// router.use(homeController);
console.log("router log");
router.use("/auth", authController);
// router.use('/cryptos', cryptoController);

module.exports = router;

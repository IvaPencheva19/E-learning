const express = require("express");
const router = express.Router();

const authController = require("./controllers/authController");

router.use("/auth", authController);

module.exports = router;

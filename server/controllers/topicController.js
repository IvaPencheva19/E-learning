const router = require("express").Router();
const { isAuth } = require("../middlewares/authMiddleware");
const topicService = require("../services/topicService");
const { getErrorMessage } = require("../utils/errorHelpers");
const Topic = require("../models/Topic");

router.post("/addTopic", isAuth, async (req, res) => {
  const { name, materials } = req.body;

  try {
    console.log(req.body);
    const topicData = {
      name,
      materials,
    };
    await topicService.create(topicData);
    return res.status(201).send();
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});
module.exports = router;

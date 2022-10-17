const router = require("express").Router();
const { isAuth } = require("../middlewares/authMiddleware");
const topicService = require("../services/topicService");
const { getErrorMessage } = require("../utils/errorHelpers");

router.post("/addTopic", isAuth, async (req, res) => {
  const {
    courseId,
    name,
    materials } = req.body;

  try {
    
    await topicService.create({
      courseId,
      name,
      materials
    });

    return res.status(201).send();

  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});
module.exports = router;

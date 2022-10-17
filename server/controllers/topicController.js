const router = require("express").Router();
const { isAuth } = require("../middlewares/authMiddleware");
const topicService = require("../services/topicService");
const courseService = require("../services/courseService");
const { getErrorMessage } = require("../utils/errorHelpers");

router.post("/addTopic", isAuth, async (req, res) => {
  const {
    name,
    materials,
    courseId
  } = req.body;

  try {
    const topic = await topicService.create({ name, materials });

    const course = await courseService.findById(courseId);
    course.topics.push(topic);
    await courseService.update(course);

    return res.status(201).json(course);
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});
module.exports = router;

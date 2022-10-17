const router = require("express").Router();
const { isAuth } = require("../middlewares/authMiddleware");
const courseService = require("../services/courseService");
const { getErrorMessage } = require("../utils/errorHelpers");
const Course = require("../models/Course");

router.post("/addCourse", isAuth, async (req, res) => {
  const { subject, description, category, startDate, finalDate, topics } =
    req.body;
  console.log(subject, description, category, startDate, finalDate, topics);

  try {
    console.log(req.body);
    const courseData = {
      subject,
      description,
      category,
      startDate,
      finalDate,
      topics,
    };
    await courseService.create(courseData);
    return res.status(201).send();
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});
module.exports = router;

const router = require("express").Router();
const { isAuth } = require("../middlewares/authMiddleware");
const courseService = require("../services/courseService");
const { getErrorMessage } = require("../utils/errorHelpers");
const Course = require("../models/Course");

router.post("/", isAuth, async (req, res) => {
  const { name, subject, description, category, startDate, finalDate } =
    req.body;

  const newStartDate = new Date(startDate).toISOString();
  const newFinalDate = new Date(finalDate).toISOString();
  try {
    const courseData = {
      name,
      subject,
      description,
      category,
      startDate: newStartDate,
      finalDate: newFinalDate,
      topics: [],
    };

    await courseService.create(courseData);

    return res.status(201).send();
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});

router.get("/", isAuth, async (req, res) => {
  try {
    console.log("here");
    const courses = await courseService.getAll();
    console.log(courses);
    return res.status(201).send(courses);
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});
module.exports = router;

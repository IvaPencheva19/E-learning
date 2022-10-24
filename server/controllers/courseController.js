const router = require("express").Router();
const { isAuth } = require("../middlewares/authMiddleware");
const courseService = require("../services/courseService");
const { getErrorMessage } = require("../utils/errorHelpers");

router.post("/", isAuth, async (req, res) => {
  const { name, subject, description, category, startDate, finalDate, user } =
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
      user,
      students: [],
    };

    const course = await courseService.create(courseData);

    return res.status(201).json(course);
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});

router.post("/add", isAuth, async (req, res) => {
  try {
    const { id } = req.body;
    console.log(req.body);
    const courses = await courseService.getAll(id);
    console.log(courses);

    return res.status(201).json(courses);
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});
module.exports = router;

const router = require("express").Router();
const { isAuth } = require("../middlewares/authMiddleware");
const courseService = require("../services/courseService");
const userService = require("../services/userService");

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
    await userService.addCourse(user, course._id);
    return res.status(201).json(course);
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});

router.post("/getAll", isAuth, async (req, res) => {
  try {
    const { id } = req.body;

    const user = await userService.find(id);

    const allCourses = await Promise.all(
      user.courses.map(async (element) => {
        return await courseService.findById(element);
      })
    );

    return res.status(201).json(allCourses);
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});

router.post("/getCourse", isAuth, async (req, res) => {
  try {
    const { id } = req.body;

    const course = await courseService.findById(id);

    return res.status(201).json(course);
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});
module.exports = router;

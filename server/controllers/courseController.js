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

router.post("/getCourseMembers", isAuth, async (req, res) => {
  try {
    const { id } = req.body;

    const course = await courseService.findById(id);

    const students = await Promise.all(
      course.students.map(async (element) => {
        return await userService.find(element);
      })
    );
    return res.status(201).json(students);
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});
router.post("/addCourseMember", isAuth, async (req, res) => {
  try {
    const { idCourse, username } = req.body;

    const course = await courseService.findById(idCourse);
    const user = await userService.findByUsername(username);
    const userUpd = user[0];

    const findUser = course.students.find((a) => a == userUpd._id.toString());

    if (!findUser) {
      course.students.push(userUpd._id);
      userUpd.courses.push(idCourse);
      await userService.update(userUpd);
      await courseService.update(course);
    }
    return res.status(201).json(course);
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});
router.post("/removeCourseMember", isAuth, async (req, res) => {
  try {
    const { idCourse, username } = req.body;

    const course = await courseService.findById(idCourse);
    const user = await userService.findByUsername(username);
    const userUpd = user[0];

    const studentIndex = course.students.indexOf(
      course.students.find((a) => a == userUpd._id.toString())
    );

    const courseIndex = userUpd.courses.indexOf(idCourse);

    userUpd.courses.splice(courseIndex, 1);
    course.students.splice(studentIndex, 1);

    await courseService.update(course);
    await userService.update(userUpd);
    return res.status(201).json(course);
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});

router.post("/update", isAuth, async (req, res) => {
  try {
    const { idCourse, courseData } = req.body;

    const course = await courseService.findById(idCourse);
    course.name = courseData.name;
    course.subject = courseData.subject;
    course.description = courseData.description;
    course.startDate = courseData.startDate;
    course.finalDate = courseData.finalDate;

    await courseService.update(course);
    console.log(course);
    return res.status(201).json(course);
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});
module.exports = router;

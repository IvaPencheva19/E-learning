const router = require("express").Router();
const { isAuth } = require("../middlewares/authMiddleware");
const topicService = require("../services/topicService");
const courseService = require("../services/courseService");
const { getErrorMessage } = require("../utils/errorHelpers");
const ObjectID = require("mongodb").ObjectId;

router.post("/", isAuth, async (req, res) => {
  const { courseId, name, materials } = req.body;

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

router.post("/getAll", isAuth, async (req, res) => {
  try {
    const { id } = req.body;

    const course = await courseService.findById(id);

    const allTopics = await Promise.all(
      course.topics.map(async (element) => {
        return await topicService.findById(element);
      })
    );

    return res.status(201).json(allTopics);
  } catch (error) {
    // mongoose error

    return res.status(400).send({ error: getErrorMessage(error) });
  }
});

router.post("/remove", isAuth, async (req, res) => {
  try {
    const { idTopic, idCourse } = req.body;
    const course = await courseService.findById(idCourse);
    const topicIndex = course.topics.indexOf(
      course.topics.find((a) => a == idTopic)
    );

    course.topics.splice(topicIndex, 1);

    await courseService.update(course);

    await topicService.findByIdAndRemove(idTopic);

    return res.status(201).json(course);
  } catch (error) {
    // mongoose error

    return res.status(400).send({ error: getErrorMessage(error) });
  }
});

router.post("/deleteMaterial", isAuth, async (req, res) => {
  try {
    const { idTopic, deleteMaterial } = req.body;
    const topic = await topicService.findById(idTopic);
    const materialIndex = topic.materials.indexOf(
      topic.materials.find((a) => a == deleteMaterial)
    );
    topic.materials.splice(materialIndex, 1);
    await topicService.update(topic);
    return res.status(201).json(topic);
  } catch (error) {
    // mongoose error

    return res.status(400).send({ error: getErrorMessage(error) });
  }
});

router.post("/addMaterial", isAuth, async (req, res) => {
  try {
    const { idTopic, addMaterial } = req.body;
    const topic = await topicService.findById(idTopic);
    topic.materials.push(addMaterial);
    await topicService.update(topic);
    return res.status(201).json(topic);
  } catch (error) {
    // mongoose error

    return res.status(400).send({ error: getErrorMessage(error) });
  }
});

router.post("/edit", isAuth, async (req, res) => {
  try {
    const { idTopic, newName } = req.body;
    const topic = await topicService.findById(idTopic);
    topic.name = newName;
    await topicService.update(topic);

    return res.status(201).json(topic);
  } catch (error) {
    // mongoose error

    return res.status(400).send({ error: getErrorMessage(error) });
  }
});

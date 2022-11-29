const router = require("express").Router();
const { isAuth } = require("../middlewares/authMiddleware");
const courseService = require("../services/courseService");
const answerService = require("../services/answerService");
const questionService = require("../services/questionService");
const quizService = require("../services/quizService");
const userService = require("../services/userService");
const quizAnswersService = require("../services/quizAnswersService");

const { getErrorMessage } = require("../utils/errorHelpers");

router.post("/add", isAuth, async (req, res) => {
  try {
    const { courseId, values, questions } = req.body;
    let answersData = [];

    let titlesData = [];
    let questionsData = [];
    let trueAnswersData = [];

    console.log(values);
    console.log(questions);

    questions.forEach((element) => {
      // console.log(element);
      element.forEach((val) => {
        if ("radio" in val) {
          trueAnswersData.push(val);
        }
      });
    });

    questions.forEach((element, i) => {
      element.forEach((val) => {
        if (
          "answer1" in val ||
          "answer2" in val ||
          "answer3" in val ||
          "answer4" in val
        ) {
          answersData.push({
            value: Object.values(val).join(""),
            isCorrect: trueAnswersData[i].radio === Object.keys(val).join(""),
          });
        } else if ("title" in val) {
          titlesData.push(val.title);
        }
      });
    });

    const answers = await answerService.create(answersData);

    let answersIds = [];
    answers.forEach((val) => {
      answersIds.push(val._id);
    });

    let br = 0;
    titlesData.forEach((val) => {
      questionsData.push({ title: val, answers: answersIds.slice(br, br + 4) });
      br = br + 4;
    });

    const questionsToAdd = await questionService.create(questionsData);

    let questionsIds = [];
    questionsToAdd.forEach((val) => {
      questionsIds.push(val._id);
    });

    const quizData = {
      title: values.title,
      startTime: new Date(
        `${values.startDate}T${values.startTime}z`
      ).toISOString(),
      endTime: new Date(`${values.startDate}T${values.endTime}`).toISOString(),
      questions: questionsIds,
    };
    console.log(quizData);
    const quiz = await quizService.create(quizData);
    const course = await courseService.findById(courseId);

    course.quizzes.push(quiz);

    await courseService.update(course);

    return res.status(201).json(course);
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});
router.post("/getAll", isAuth, async (req, res) => {
  try {
    const { idUser } = req.body;

    const user = await userService.find(idUser);

    const allCourses = await Promise.all(
      user.courses.map(async (element) => {
        return await courseService.findById(element);
      })
    );

    let quizzesIds = [];
    allCourses.forEach((element) => {
      quizzesIds.push(element.quizzes);
    });
    quizzesIds = quizzesIds.flat();

    const allQuizzes = await Promise.all(
      quizzesIds.map(async (element) => {
        return await quizService.findById(element);
      })
    );

    const now = new Date();
    now.setTime(now.getTime() + 2 * 60 * 60 * 1000);

    const allActiveQuizzes = allQuizzes.filter(
      (quiz) => quiz.startTime <= now && quiz.endTime >= now
    );

    return res.status(201).json(allActiveQuizzes);
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});

router.post("/getQuiz", isAuth, async (req, res) => {
  try {
    const { id } = req.body;

    const quiz = await quizService.findById(id);
    return res.status(201).json(quiz);
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});

router.post("/submit", isAuth, async (req, res) => {
  try {
    const { idQuiz, idUser, checkedAnswers } = req.body;

    const quiz = await quizService.findById(idQuiz);
    let answerIds = [];
    answerIds = checkedAnswers.map((element) => {
      return Object.values(element);
    });
    answerIds = answerIds.flat();
    //console.log(answerIds);
    // const answers = await Promise.all(
    //   answerIds.map(async (element) => {
    //     return await answerService.findById(element);
    //   })
    // );
    // const trueAnswers = answers.filter((answer) => answer.isCorrect == true);
    const quizAnswersToAdd = {
      student: idUser,
      quiz: idQuiz,
      answers: answerIds,
    };
    const readyQuiz = await quizAnswersService.create(quizAnswersToAdd);

    return res.status(201).json(readyQuiz);
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});

router.post("/getAnswers", isAuth, async (req, res) => {
  try {
    const { idQuiz, idUser } = req.body;
    const quizResult = await quizAnswersService.findStudentResult(
      idQuiz,
      idUser
    );
    return res.status(201).json(quizResult);
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});

router.post("/getAllResultsStudent", isAuth, async (req, res) => {
  try {
    const { idUser } = req.body;
    const quizzes = await quizAnswersService.findStudentAllResults(idUser);
    return res.status(201).json(quizzes);
  } catch (error) {
    // mongoose error
    return res.status(400).send({ error: getErrorMessage(error) });
  }
});
module.exports = router;

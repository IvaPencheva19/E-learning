import * as React from "react";
import Chip from "@mui/material/Chip";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { theme } from "../../utils/theme";
import { ThemeProvider } from "@mui/material/styles";

import Button from "@mui/material/Button";
import * as quizService from "../../services/quizService";
import "./make_quiz.scss";
import Question from "./question_container/Question";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { AuthContext } from "../../context/AuthContext";

import QuizContainer from "./quiz_container/QuizContainer";
import ResultContainer from "./result_container/ResultContainer";
function MakeQuiz({ idQuiz }) {
  const { user } = useContext(AuthContext);
  const [endTime, setEndTime] = useState();

  const [quiz, setQuiz] = useState([]);
  const [isQuizSubmit, setIsQuizSubmit] = useState(false);
  const [resultAnswers, setResultAnswers] = useState([]);

  const sliceDates = async () => {
    setEndTime(await quiz.endTime?.toString().slice(11, 16));
  };

  useEffect(() => {
    quizService
      .getAnswers(idQuiz, user._id)
      .then((result) => {
        if (result.length > 0) {
          setIsQuizSubmit(true);
          setResultAnswers(result[0].answers);
        }
      })
      .catch((err) => {
        console.error(err);
      });

    quizService
      .getQuiz(idQuiz)
      .then((result) => {
        setQuiz((oldState) => result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    sliceDates();
  }, [quiz]);

  return (
    <ThemeProvider theme={theme}>
      {isQuizSubmit ? (
        <ResultContainer
          user={user}
          quiz={quiz}
          resultAnswers={resultAnswers}
        />
      ) : (
        <QuizContainer
          user={user}
          quiz={quiz}
          endTime={endTime}
          idQuiz={idQuiz}
        />
      )}
    </ThemeProvider>
  );
}

export default MakeQuiz;

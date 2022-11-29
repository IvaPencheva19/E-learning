import * as React from "react";
import Chip from "@mui/material/Chip";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { theme } from "../../../utils/theme";
import { ThemeProvider } from "@mui/material/styles";

import Button from "@mui/material/Button";
import * as quizService from "../../../services/quizService";

import Question from "../question_container/Question";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { AuthContext } from "../../../context/AuthContext";
import { CircularProgressbar } from "react-circular-progressbar";
import "./result_container.scss";
import ResultQuestion from "../result_question_container/ResultQuestion";

function ResultContainer({ user, quiz, resultAnswers }) {
  const [trueAnswers, setTrueAnswers] = useState([]);
  useEffect(() => {
    let result = resultAnswers.filter((answer) => answer.isCorrect == true);
    setTrueAnswers(result);
  }, [resultAnswers]);

  // console.log(trueAnswers);
  return (
    <div>
      <div className="quiz">
        <div className="left">
          <span className="quizTitle">{quiz.title}</span>

          <span className="descResult">
            Your result: {trueAnswers.length}/{resultAnswers.length}
          </span>
        </div>

        <div className="right">
          {" "}
          <div className="progress">
            <CircularProgressbar
              value={(trueAnswers.length / resultAnswers.length) * 100}
              text={(trueAnswers.length / resultAnswers.length) * 100 + "%"}
              strokeWidth={5}
            />
          </div>
        </div>
      </div>

      {quiz.questions?.length > 0 ? (
        quiz.questions.map((x) => (
          <ResultQuestion
            question={x}
            resultAnswers={resultAnswers}
            trueAnswers={trueAnswers}
            key={x._id}
          />
        ))
      ) : (
        <p>No current quizzes available!</p>
      )}
    </div>
  );
}

export default ResultContainer;

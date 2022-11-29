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

function QuizContainer({ user, quiz, endTime, idQuiz }) {
  const [checkedAnswers, setCheckedAnswers] = useState([]);
  const handleSubmit = () => {
    quizService
      .submitQuiz(idQuiz, user._id, checkedAnswers)
      .then((result) => {
        //navigate("/home");
        console.log(result);
      })
      .catch((err) => {});
  };

  return (
    <div>
      <div className="quiz">
        <div className="left">
          <span className="quizTitle">{quiz.title}</span>

          <Chip
            className="endTime"
            label={"Ends at: " + endTime}
            sx={{
              color: "secondary.main",
              bgcolor: "rgb(160, 160, 160,0.1)",
            }}
          />
          {/* <span className="desc"> {course.description}</span> */}
        </div>

        <div className="right"></div>
      </div>
      <ValidatorForm onSubmit={handleSubmit}>
        {quiz.questions?.map((data) => {
          return (
            <Question
              key={data._id}
              question={data}
              setCheckedAnswers={setCheckedAnswers}
              checkedAnswers={checkedAnswers}
            />
          );
        })}
        <Button
          className="submit"
          variant="contained"
          type="submit"
          onClick={() => {}}
          color="secondary"
          sx={{ ml: "10%", width: "80%", color: "white" }}
        >
          Submit
        </Button>
      </ValidatorForm>
    </div>
  );
}

export default QuizContainer;

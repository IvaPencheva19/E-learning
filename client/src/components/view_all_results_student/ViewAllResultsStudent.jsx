import * as React from "react";
import Chip from "@mui/material/Chip";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { theme } from "../../utils/theme";
import { ThemeProvider } from "@mui/material/styles";

import Button from "@mui/material/Button";
import * as quizService from "../../services/quizService";
import "./view_all_results_student.scss";

import { AuthContext } from "../../context/AuthContext";
import QuizWidget from "./QuizWidget";
function ViewAllResultsStudent() {
  const { user } = useContext(AuthContext);
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    quizService
      .getAllResultsStudent(user._id)
      .then((result) => {
        setQuizzes((oldState) => [...result]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(quizzes.length);
  return (
    <div>
      {quizzes.length > 0 ? (
        quizzes.map((x) => (
          <div className="quizWidgets" key={x._id}>
            <QuizWidget key={x._id} quiz={x.quiz} />{" "}
          </div>
        ))
      ) : (
        <p>No current quizzes available!</p>
      )}
    </div>
  );
}

export default ViewAllResultsStudent;

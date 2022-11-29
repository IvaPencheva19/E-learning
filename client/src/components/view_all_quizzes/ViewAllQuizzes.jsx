import React from "react";
import "./view_all_quizzes.scss";
import QuizWidget from "../quiz_widget/QuizWidget";
import * as quizService from "../../services/quizService";
import { useEffect, useState } from "react";

import {
  LOCAL_STORAGE_KEY,
  SERVER_AUTHORIZATION_HEADER_NAME,
} from "../../config/constants";
function ViewAllQuizzes() {
  const authData = localStorage.getItem(LOCAL_STORAGE_KEY);

  const auth = JSON.parse(authData || "{}");
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    quizService
      .getQuizzes(auth._id)
      .then((result) => {
        setQuizzes((oldState) => [...result]);
        // console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      {quizzes.length > 0 ? (
        quizzes.map((x) => (
          <div className="quizWidgets" key={x._id}>
            <QuizWidget key={x._id} quiz={x} />{" "}
          </div>
        ))
      ) : (
        <p>No current quizzes available!</p>
      )}
    </div>
  );
}

export default ViewAllQuizzes;

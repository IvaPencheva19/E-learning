import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import MakeQuiz from "../../components/make_quiz/MakeQuiz";
import * as quizService from "../../services/quizService";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";

const MakeQuizPage = () => {
  let { user } = useContext(AuthContext);
  const [quiz, setQuiz] = useState();
  let { id } = useParams();

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <MakeQuiz idQuiz={id} />
      </div>
    </div>
  );
};

export default MakeQuizPage;

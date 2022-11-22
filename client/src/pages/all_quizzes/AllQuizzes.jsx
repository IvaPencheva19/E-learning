import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./add_quiz.scss";
import AllQuizzes from "../../components/all_quizzes/AllQuizzes";
import React, { useState } from "react";

const AddQuizPage = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <AllQuizzes />
      </div>
    </div>
  );
};

export default AddQuizPage;

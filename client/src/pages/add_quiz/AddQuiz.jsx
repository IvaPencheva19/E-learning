import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./add_quiz.scss";
import AddQuiz from "../../components/add_quiz/AddQuiz";
import React, { useState } from "react";

const AddQuizPage = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <AddQuiz />
      </div>
    </div>
  );
};

export default AddQuizPage;

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ViewAllResultsStudent from "../../components/view_all_results_student/ViewAllResultsStudent";

import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";

const ViewAllResultsStudentPage = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <ViewAllResultsStudent />
      </div>
    </div>
  );
};

export default ViewAllResultsStudentPage;

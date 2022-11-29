import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import ViewAllQuizzes from "../../components/view_all_quizzes/ViewAllQuizzes";

const ViewAllQuizzesPage = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <ViewAllQuizzes />
      </div>
    </div>
  );
};

export default ViewAllQuizzesPage;

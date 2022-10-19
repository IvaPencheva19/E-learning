import Sidebar from "../../components/sidebar_teacher/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./addCourse.scss";
import AddCourse from "../../components/add_course/AddCourse";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <AddCourse />
      </div>
    </div>
  );
};

export default Home;

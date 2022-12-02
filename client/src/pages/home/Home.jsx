import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import * as courseService from "../../services/courseService";
import Summary from "../../components/summary/Summary";
import AllCourses from "../../components/all_courses/AllCourses";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    courseService
      .getCourses(user._id, user.role)
      .then((result) => {
        setCourses(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (courses.length > 4) {
    setCourses(courses.slice(0, 4));
  }

  return (
    <div className="home">
      <Sidebar />

      <div className="homeContainer">
        <Navbar />
        <div className="charts">
          <Summary />
          <AllCourses />
        </div>
      </div>
    </div>
  );
};

export default Home;

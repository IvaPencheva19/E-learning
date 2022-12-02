import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import FeaturedStudent from "../../components/featured_student/FeaturedStudent";
import FeaturedTeacher from "../../components/featured_teacher/FeaturedTeacher";
import Chart from "../../components/chart/Chart";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import * as courseService from "../../services/courseService";

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
        {/* <div className="widgets">
          {courses.length > 0 ? (
            courses.map((x) => <Widget key={x._id} course={x} />)
          ) : (
            <p>No current courses available!</p>
          )}
        </div> */}
        <div className="charts">
          {user.role === "Student" ? <FeaturedStudent /> : <FeaturedTeacher />}

          <Chart title="Last 6 Months Activity" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;

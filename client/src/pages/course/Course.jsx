import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./course.scss";
import { useContext, useEffect, useState } from "react";
import * as courseService from "../../services/courseService";
import CourseContainerTeacher from "../../components/course_container/CourseContainerTeacher";
import CourseContainerStudent from "../../components/course_container/CourseContainerStudent";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Footer from "../../components/footer/Footer";
const Home = () => {
  let { user } = useContext(AuthContext);
  const [course, setCourse] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    courseService
      .getCourse(id)
      .then((result) => {
        setCourse((oldState) => result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div>
            {course.length != 0 &&
              (user.role == "Teacher" ? (
                <CourseContainerTeacher course={course} />
              ) : (
                <CourseContainerStudent course={course} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

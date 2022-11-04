import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./course.scss";
import { useEffect, useState } from "react";
import * as courseService from "../../services/courseService";
import CourseContainer from "../../components/course_container/CourseContainer";
import { useParams } from "react-router-dom";
import Chip from "@mui/material/Chip";

import {
  LOCAL_STORAGE_KEY,
  SERVER_AUTHORIZATION_HEADER_NAME,
} from "../../config/constants";
import Typography from "@mui/material/Typography";
const Home = () => {
  const authData = localStorage.getItem(LOCAL_STORAGE_KEY);

  const auth = JSON.parse(authData || "{}");
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
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div>
          <CourseContainer course={course} />
        </div>
      </div>
    </div>
  );
};

export default Home;

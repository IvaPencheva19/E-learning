import Sidebar from "../../components/sidebar_teacher/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./all_courses_teacher.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import * as courseService from "../../services/courseService";

const Home = () => {
  let courses;
  const setCourses = (courses, result) => (courses = result);
  const loadCoursers = () =>
    courseService
      .getCourses()
      .then((result) => {
        setCourses(courses, result);
      })
      .catch((err) => {});

  //courses = loadCoursers();

  console.log(courses);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
      </div>
      <p>{}</p>;
    </div>
  );
};

export default Home;

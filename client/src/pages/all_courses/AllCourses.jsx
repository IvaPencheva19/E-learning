import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./all_courses.scss";
import { useEffect, useState } from "react";
import * as courseService from '../../services/courseService';
import Widget from '../../components/widget/Widget';


const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    courseService.getCourses()
      .then(result => {
        setCourses(oldState => ([...result]));
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {
            courses.length > 0
              ? (courses.map(x => <Widget key={x._id} course={x} />))
              : (<p>No current courses available!</p>)
          }
        </div>
        <div className="widgets">
          {/* <Widget /> */}
          {/* <Widget /> */}
          {/* <Widget /> */}
          {/* <Widget /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;

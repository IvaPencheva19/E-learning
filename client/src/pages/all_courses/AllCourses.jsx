import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./all_courses.scss";
import { useContext, useEffect, useState } from "react";
import * as courseService from "../../services/courseService";
import Widget from "../../components/widget/Widget";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    courseService
      .getCourses(user._id, user.role)
      .then((result) => {
        setCourses((oldState) => [...result]);
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

        {courses.length > 0 ? (
          courses.map((x) => (
            <div className="courseWidgets" key={x._id}>
              <Widget key={x._id} course={x} />{" "}
            </div>
          ))
        ) : (
          <p>No current courses available!</p>
        )}
      </div>
    </div>
  );
};

export default Home;

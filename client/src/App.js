import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar_welcome/Navbar";
import Welcome from "./pages/welcome/Welcome";
import Home from "./pages/home/Home";
import HomeTeacher from "./pages/home_teacher/Home";
import AllCourses from "./pages/view_all_courses_student/AllCourses";
import AllCoursesTeacher from "./pages/view_all_courses_teacher/AllCoursesTeacher";
import AddCourse from "./pages/add_new_course/AddCourse";
import "./App.scss";

function App() {
  return (
    <div id="box">
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/homeTeacher" element={<HomeTeacher />} />
          <Route path="/viewAllCourses" element={<AllCourses />} />
          <Route
            path="/viewAllCoursesTeacher"
            element={<AllCoursesTeacher />}
          />
          <Route path="/addCourse" element={<AddCourse />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

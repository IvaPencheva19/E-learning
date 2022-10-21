import "./App.scss";
import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Welcome from "./pages/welcome/Welcome";
import Home from "./pages/home/Home";
import HomeTeacher from "./pages/home_teacher/Home";
import AllCourses from "./pages/view_all_courses_student/AllCourses";
import AllCoursesTeacher from "./pages/view_all_courses_teacher/AllCoursesTeacher";
import AddCourse from "./pages/add_new_course/AddCourse";


function App() {
  return (
    <div id="box">
      <main id="main-content">
        <AuthProvider >
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
        </AuthProvider>
      </main>
    </div>
  );
}

export default App;

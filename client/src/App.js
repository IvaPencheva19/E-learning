import "./App.scss";
import { Routes, Route } from "react-router-dom";

import { AuthContext } from "./context/AuthContext";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Welcome from "./pages/welcome/Welcome";
import Home from "./pages/home/Home";
import HomeTeacher from "./pages/home_teacher/Home";
import AllCourses from "./pages/view_all_courses_student/AllCourses";
import AllCoursesTeacher from "./pages/view_all_courses_teacher/AllCoursesTeacher";
import AddCourse from "./pages/add_new_course/AddCourse";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { LOCAL_STORAGE_KEY } from "./config/constants";

function App() {
  const [user, setUser] = useLocalStorage(LOCAL_STORAGE_KEY, {});

  const userLogin = (userData) => {
    setUser(userData);
  };

  const userLogout = () => {
    setUser({});
  };

  return (
    <div id="box">
      <main id="main-content">
        <AuthContext.Provider value={{ user, userLogin, userLogout }}>
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
        </AuthContext.Provider>
      </main>
    </div>
  );
}

export default App;

import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Welcome from "./pages/welcome/Welcome";
import Home from "./pages/home/Home";
import HomeTeacher from "./pages/home_teacher/Home";
import AllCourses from "./pages/view_all_courses_student/AllCourses";
import AllCoursesTeacher from "./pages/view_all_courses_teacher/AllCoursesTeacher";
import AddCourse from "./pages/add_new_course/AddCourse";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./components/common/PrivateRoute";
import { PublicRoute } from "./components/common/PublicRoute";


function App() {

  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage(LOCAL_STORAGE_KEY, {});

  const userLogin = (userData) => {
    setUser(userData);
    navigate("/home");
  };

  const userLogout = () => {
    setUser({});
    navigate("/");
  };
  const backToHome = () => {
    navigate("/home");
  };
  return (
    <div id="box">
      <main id="main-content">
        <AuthContext.Provider
          value={{ user, userLogin, userLogout, backToHome }}
        >

  return (
    <div id="box">
      <main id="main-content">
        <AuthProvider >

          <Routes>
            {/* accessed by everyone routes */}
            <Route path="/" element={<Welcome />} />

            <Route element={<PublicRoute />}>
              {/* public routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            <Route element={<PrivateRoute />}>
              {/* private routes */}
              <Route path="/home" element={<Home />} />
              <Route path="/homeTeacher" element={<HomeTeacher />} />
              <Route path="/viewAllCourses" element={<AllCourses />} />
              <Route
                path="/viewAllCoursesTeacher"
                element={<AllCoursesTeacher />}
              />
              <Route path="/addCourse" element={<AddCourse />} />
            </Route>

          </Routes>
        </AuthProvider>
      </main>
    </div>
  );
}

export default App;

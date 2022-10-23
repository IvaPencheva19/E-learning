import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Welcome from "./pages/welcome/Welcome";
import Home from "./pages/home/Home";
import AllCourses from "./pages/all_courses/AllCourses";
import AddCourse from "./pages/add_new_course/AddCourse";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./components/common/PrivateRoute";
import { PublicRoute } from "./components/common/PublicRoute";


function App() {
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
              <Route path="/course" element={<AllCourses />} />
              <Route path="/course/add" element={<AddCourse />} />
            </Route>

          </Routes>
        </AuthProvider>
      </main>
    </div>
  );
}

export default App;

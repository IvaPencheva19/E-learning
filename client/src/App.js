import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Welcome from "./pages/welcome/Welcome";
import Home from "./pages/home/Home";
import AllCourses from "./pages/all_courses/AllCourses";
import AddCourse from "./pages/add_new_course/AddCourse";
import Profile from "./pages/profile/Profile";
import Course from "./pages/course/Course";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./components/common/PrivateRoute";
import { PublicRoute } from "./components/common/PublicRoute";
import { TeacherRoute } from "./components/common/TeacherRoute";
import { StudentRoute } from "./components/common/StudentRoute";
import ViewMembers from "./pages/view_members/ViewMembers";
import AddQuiz from "./pages/add_quiz/AddQuiz";
import ViewAllQuizzesPage from "./pages/view_all_quizzes/ViewAllQuizzesPage";
import MakeQuizPage from "./pages/make_quiz/MakeQuizPage";
import ViewAllResultsStudentPage from "./pages/view_all_results_student/ViewAllResultsStudentPage";

function App() {
  return (
    <div id="box">
      <main id="main-content">
        <AuthProvider>
          <Routes>
            {/* accessed by everyone routes */}

            <Route element={<PublicRoute />}>
              {/* public routes */}
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            <Route element={<PrivateRoute />}>
              {/* private routes */}

              <Route element={<TeacherRoute />}>
                {/* user with teacher role */}
                <Route path="/course/add" element={<AddCourse />} />
              </Route>

              <Route element={<StudentRoute />}>
                {/* user with student role */}
              </Route>

              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/course" element={<AllCourses />} />
              <Route path="/course/:id" element={<Course />} />
              <Route path="/course/:id/members" element={<ViewMembers />} />
              <Route path="/course/:id/addQuiz" element={<AddQuiz />} />
              <Route path="/allQuizzes" element={<ViewAllQuizzesPage />} />
              <Route path="/allQuizzes/:id" element={<MakeQuizPage />} />
              <Route
                path="/allResults"
                element={<ViewAllResultsStudentPage />}
              />
            </Route>
          </Routes>
        </AuthProvider>
      </main>
    </div>
  );
}

export default App;

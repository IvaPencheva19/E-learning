import "./sidebar.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SearchIcon from "@mui/icons-material/Search";
import QuizIcon from "@mui/icons-material/Quiz";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PostAddIcon from "@mui/icons-material/PostAdd";

import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { user, userLogout } = useContext(AuthContext);

  if (user.role === "Teacher") {
    return (
      <div className="sidebar">
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">HOME</span>
          </Link>
        </div>

        <hr />
        <div className="center">
          <ul>
            <p className="titleSidebar">MAIN</p>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Home</span>
              </li>
            </Link>
            <p className="titleSidebar">COURSERS</p>
            <Link to="/course" style={{ textDecoration: "none" }}>
              <li>
                <LibraryBooksIcon className="icon" />
                <span>My courses</span>
              </li>
            </Link>
            <Link to="/course/add" style={{ textDecoration: "none" }}>
              <li>
                <PostAddIcon className="icon" />
                <span>Add new course</span>
              </li>
            </Link>

            <li>
              <QuizIcon className="icon" />
              <span>Pending quizzes</span>
            </li>

            <li>
              <FactCheckIcon className="icon" />
              <span>Results</span>
            </li>

            <p className="titleSidebar">USEFUL</p>
            <li>
              <InsertChartIcon className="icon" />
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneIcon className="icon" />
              <span>Notifications</span>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebar">
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">HOME</span>
          </Link>
        </div>

        <hr />
        <div className="center">
          <ul>
            <p className="titleSidebar">MAIN</p>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Home</span>
              </li>
            </Link>
            <p className="titleSidebar">COURSES</p>
            <Link to="/course" style={{ textDecoration: "none" }}>
              <li>
                <LibraryBooksIcon className="icon" />
                <span>My courses</span>
              </li>
            </Link>
            <Link to="" style={{ textDecoration: "none" }}>
              <li>
                <SearchIcon className="icon" />
                <span>Find course</span>
              </li>
            </Link>
            <Link to="/allQuizzes" style={{ textDecoration: "none" }}>
              <li>
                <QuizIcon className="icon" />
                <span>Pending quizzes</span>
              </li>
            </Link>
            <Link to="/allResults" style={{ textDecoration: "none" }}>
              <li>
                <FactCheckIcon className="icon" />
                <span>Results</span>
              </li>
            </Link>

            <p className="titleSidebar">USEFUL</p>
            <li>
              <InsertChartIcon className="icon" />
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneIcon className="icon" />
              <span>Notifications</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Sidebar;

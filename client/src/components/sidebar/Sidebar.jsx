import "./sidebar.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SearchIcon from "@mui/icons-material/Search";
import QuizIcon from "@mui/icons-material/Quiz";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PostAddIcon from "@mui/icons-material/PostAdd";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

import Button from "@mui/material/Button";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { user, userLogout } = useContext(AuthContext);

  if (user.role === "Teacher") {
    return (
      <div className="sidebar">
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">Landing Page</span>
          </Link>
        </div>

        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
              </li>
            </Link>
            <p className="title">COURSERS</p>
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
              <PersonAddAlt1Icon className="icon" />
              <span>Student's requests</span>
            </li>

            <li>
              <QuizIcon className="icon" />
              <span>Pending quizzes</span>
            </li>

            <li>
              <FactCheckIcon className="icon" />
              <span>Results</span>
            </li>

            <p className="title">USEFUL</p>
            <li>
              <InsertChartIcon className="icon" />
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneIcon className="icon" />
              <span>Notifications</span>
            </li>

            <p className="title">USER</p>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <li>
                <AccountCircleOutlinedIcon className="icon" />
                <span>Profile</span>
              </li>
            </Link>
            <li onClick={userLogout}>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
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
            <span className="logo">Landing Page</span>
          </Link>
        </div>

        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
              </li>
            </Link>
            <p className="title">COURSERS</p>
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

            <p className="title">USEFUL</p>
            <li>
              <InsertChartIcon className="icon" />
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneIcon className="icon" />
              <span>Notifications</span>
            </li>

            <p className="title">USER</p>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <li>
                <AccountCircleOutlinedIcon className="icon" />
                <span>Profile</span>
              </li>
            </Link>
            <li onClick={userLogout}>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Sidebar;

import "./sidebar.scss";
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
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const SidebarTeacher = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">user</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/homeTeacher" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">COURSERS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <Link
              to="/viewAllCoursesTeacher"
              style={{ textDecoration: "none" }}
            >
              <li>
                <LibraryBooksIcon className="icon" />
                <span>My courses</span>
              </li>
            </Link>
          </Link>
          <Link to="/addCourse" style={{ textDecoration: "none" }}>
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
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default SidebarTeacher;

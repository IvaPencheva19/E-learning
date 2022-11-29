import "./widget.scss";
import InsightsIcon from "@mui/icons-material/Insights";
import { Link } from "react-router-dom";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
const Widget = ({ course }) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">Course name: {course.name}</span>
        <span className="counter">Info: {course.description}</span>

        <Link className="linkCourse" to={`/course/${course._id}`}>
          Go to course
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <LibraryBooksIcon />
        </div>
      </div>
    </div>
  );
};

export default Widget;

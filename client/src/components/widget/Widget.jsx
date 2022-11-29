import "./widget.scss";
import InsightsIcon from "@mui/icons-material/Insights";
import { Link } from "react-router-dom";

const Widget = ({ course }) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{course.name}</span>
        <span className="counter">{course.description}</span>

        <Link
          className="CourseDetailLink"
          to={`/course/${course._id}`}>
          Details
        </Link>
        
      </div>
      <div className="right">
        <div className="percentage positive">
          <InsightsIcon />
        </div>
      </div>
    </div>
  );
};

export default Widget;

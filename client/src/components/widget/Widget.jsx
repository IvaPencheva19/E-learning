import "./widget.scss";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Widget = ({ course }) => {
  const navigate = useNavigate();

  const courseDetails = () => {
    navigate(`/course/${course._id}`);
  };

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{course.name}</span>
        <div className="counter">{course.description || "\u00A0"}</div>

        <Button className="CourseDetailLink" onClick={courseDetails}>
          Details
        </Button>
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

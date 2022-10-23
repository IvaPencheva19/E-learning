import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";

const FeaturedTeacher = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <p className="amount">7</p>
        <p className="title">Courses</p>
        <p className="amount">30</p>
        <p className="title">Tpoics</p>
        <p className="amount">20</p>
        <p className="title">Students</p>
      </div>
    </div>
  );
};

export default FeaturedTeacher;

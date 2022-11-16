import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";

const FeaturedTeacher = () => {



  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Summary</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
      <p className="title">Courses <span className="amount">7</span></p>
      <p className="title">Topics <span className="amount">30</span></p>
      <p className="title">Students <span className="amount">20</span></p>
      </div>
    </div>
  );
};

export default FeaturedTeacher;

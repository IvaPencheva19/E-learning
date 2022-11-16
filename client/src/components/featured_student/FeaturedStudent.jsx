import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const FeaturedStudent = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Summary</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Average quizzes result</p>
        <p className="amount">7</p>
        <p className="title">Pending quizzes</p>
      </div>
    </div>
  );
};

export default FeaturedStudent;

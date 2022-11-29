import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import InsightsIcon from "@mui/icons-material/Insights";

const FeaturedStudent = () => {
  return (
    <div className="featuredStudent">
      <div className="top">
        <h1 className="titleStudent">Summary</h1>
        <InsightsIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="titleStudent">Average quizzes result</p>
        <p className="amount">7</p>
        <p className="titleStudent">Pending quizzes</p>
      </div>
    </div>
  );
};

export default FeaturedStudent;

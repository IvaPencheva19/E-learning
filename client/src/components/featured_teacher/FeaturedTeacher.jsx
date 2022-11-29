import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";
import InsightsIcon from "@mui/icons-material/Insights";
const FeaturedTeacher = () => {
  return (
    <div className="featuredTeacher">
      <div className="topTeacher">
        <h1 className="titleTeacher">Summary</h1>
        <InsightsIcon fontSize="small" />
      </div>
      <div className="bottomTeacher">
        <span className="categoryStat">Courses</span>{" "}
        <span className="amountTeacher">7</span>
        <span className="categoryStat">Topics</span>{" "}
        <span className="amountTeacher">30</span>
        <span className="categoryStat">Students</span>{" "}
        <span className="amountTeacher">20</span>
      </div>
    </div>
  );
};

export default FeaturedTeacher;

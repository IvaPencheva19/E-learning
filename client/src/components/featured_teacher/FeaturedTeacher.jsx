import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";
import InsightsIcon from "@mui/icons-material/Insights";
const FeaturedTeacher = () => {
  return (
    <>
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
          <div className="bottom">
            <p className="title">
              Courses <span className="amount">7</span>
            </p>
            <p className="title">
              Topics <span className="amount">30</span>
            </p>
            <p className="title">
              Students <span className="amount">20</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedTeacher;

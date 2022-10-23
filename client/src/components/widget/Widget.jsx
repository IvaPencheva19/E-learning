import "./widget.scss";
import InsightsIcon from "@mui/icons-material/Insights";

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">Course </span>
        <span className="counter">Info</span>
        <span className="link">Link</span>
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

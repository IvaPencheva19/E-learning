import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import InsightsIcon from "@mui/icons-material/Insights";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

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

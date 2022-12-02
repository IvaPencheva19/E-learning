import "./navbar.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import HelpMenu from "../navbar_welcome/help_menu/HelpMenu";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <span className="empty"></span>
        <div className="items">
          <div className="item">
            <HelpMenu user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

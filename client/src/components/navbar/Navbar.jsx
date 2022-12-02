import "./navbar.scss";

import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <span className="empty"></span>
        <div className="items">
          <div className="item">
            <img
              onClick={() => {
                navigate("/profile");
              }}
              src={user.imageUrl}
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

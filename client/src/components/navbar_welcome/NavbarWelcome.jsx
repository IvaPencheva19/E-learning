import "./navbarWelcome.scss";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">

      <div className="wrapper">
        <img className="navbarLogo" src="./logo.png" alt="" />

        <div className="navButtonsContainer">
          <Link className="navigationLink" to="/login">Login</Link>
          <Link className="navigationLink" to="/register">Register</Link>
        </div>
      </div>

    </div>
  );
};

export default Navbar;

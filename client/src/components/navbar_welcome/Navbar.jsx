import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navWrapper">
      <Link
        to="/"
      >
        <img className="navbarLogo" src="./connect.webp" alt="" />
      </Link>

      <div className="navButtonsContainer">
        <Link className="navigationLink" to="/login">Login</Link>
        <Link className="navigationLink" to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;

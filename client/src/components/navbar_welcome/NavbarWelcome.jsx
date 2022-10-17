import "./navbarWelcome.scss";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { Button } from "@mui/material";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">

      <div className="wrapper">
        <img className="navbarLogo" src="./logo.png" alt="" />

        <div className="navButtonsContainer">
          <Button> Login </Button>
          <Button> Register </Button>
        </div>
      </div>

    </div>
  );
};

export default Navbar;

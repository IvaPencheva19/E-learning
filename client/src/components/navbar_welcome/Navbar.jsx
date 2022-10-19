import { Link } from "react-router-dom";
import "./navbar.scss";
import { theme } from "../../utils/theme";
import { Button } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <div className="navWrapper">
        <Link to="/">
          <img className="navbarLogo" src="./img/connect.webp" alt="" />
        </Link>

        <div className="navButtonsContainer">
          <Button variant="outlined" onClick={() => navigate("/login")}>
            Sign in
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate("/register")}
            sx={{
              color: "white",
            }}
          >
            Sign up
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;

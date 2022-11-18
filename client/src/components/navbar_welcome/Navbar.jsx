import { Link } from "react-router-dom";
import "./navbar.scss";
import { theme } from "../../utils/theme";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, userLogout } = useContext(AuthContext);

  const noUserButtons = () => {
    return (
      <>
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
      </>
    );
  }

  const userButtons = () => {
    return (
      <>
        <Button variant="contained"
          sx={{
            color: "white",
          }}
          onClick={() => navigate("/home")}>
          Home
        </Button>
        <Button variant="contained"
          sx={{
            color: "white",
          }}
          onClick={userLogout}>
          Logout
        </Button>
      </>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="navWrapper">
        <Link to="/" >
          <img className="navbarLogo" src="./img/connect.webp" alt="" />
        </Link>

        <div className="navButtonsContainer">
          {user.email
            ? userButtons()
            : noUserButtons()
          }
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;

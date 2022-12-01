import Typography from "@mui/material/Typography";
import "./welcome.scss";
import Navbar from "../../components/navbar_welcome/Navbar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { theme } from "../../utils/theme";
import { ThemeProvider } from "@mui/material/styles";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <>
        {/* <Navbar /> */}
        <div className="demoB">
          <div className="backB"></div>
          <div className="frontB">
            <div className="welcomeOverlay">
              <div className="titleWelcome">
                Join our e-learning <br></br>platform
              </div>
              <div className="welcomeButtons">
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ height: "7vh", width: "7vw" }}
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </Button>

                <Button
                  variant="contained"
                  onClick={() => navigate("/register")}
                  color="secondary"
                  sx={{
                    height: "7vh",
                    width: "7vw",
                    color: "white",
                  }}
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
};

export default Welcome;

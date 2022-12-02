import Typography from "@mui/material/Typography";
import "./welcome.scss";
import Navbar from "../../components/navbar_welcome/Navbar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { theme } from "../../utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import * as React from "react";

import Footer from "../../components/footer/Footer";
const Welcome = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="demoB">
          <div className="backB"></div>

          <div className="frontB"></div>

          <div className="welcomeOverlay">
            <div className="welcomeContainer">
              <div className="titleWelcome">
                Join our e-learning <br></br>platform
              </div>

              <div className="welcomeButtons">
                <Button
                  variant="outlined"
                  color="secondary"
                  className="button"
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </Button>

                <Button
                  variant="contained"
                  onClick={() => navigate("/register")}
                  color="secondary"
                  className="button"
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Welcome;

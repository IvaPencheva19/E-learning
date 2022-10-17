import Sidebar from "../../components/sidebar/Sidebar";
import NavbarWelcome from "../../components/navbar_welcome/NavbarWelcome";
import "./welcome.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";

import { Grid } from "@mui/material";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <NavbarWelcome />

        <Grid container>
          <Grid xs={4}>
            <p>Welcome to the virtual classroom</p>
          </Grid>
          <Grid xs={4}>
            <img className="welcomeImage" src="./welcomeImage.png" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;

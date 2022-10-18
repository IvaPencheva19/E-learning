import NavbarWelcome from "../../components/navbar_welcome/NavbarWelcome";
import Typography from "@mui/material/Typography";
import "./welcome.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <NavbarWelcome />

        <section className="welcomeContainer">
          <div className="welcomeText">
            <Typography
              variant="h1"
              color="text.secondary"
              align="center"
              className="Title"
            >
              Welcome to our online class!
            </Typography>
          </div>

          <div>
            <img src="./welcomeImage.png" alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

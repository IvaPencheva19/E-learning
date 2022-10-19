import Typography from "@mui/material/Typography";
import "./welcome.scss";
import Navbar from "../../components/navbar_welcome/Navbar";

const Welcome = () => {
  return (
    <>
      <Navbar />
      <section className="welcomeContainer">
        <div className="welcomeText">
          <p
            variant="h1"
            color="text.secondary"
            align="center"
            className="Title"
          >
            Welcome to our online class!
          </p>
        </div>

        <div className="welcomeImg">
          <img src="./img/welcomeImage.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Welcome;

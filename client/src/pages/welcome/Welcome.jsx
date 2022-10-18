import Typography from "@mui/material/Typography";
import "./welcome.scss";

const Welcome = () => {
  return (
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

      <div className="welcomeImg">
        <img src="./welcomeImage.png" alt="" />
      </div>
    </section>
  );
};

export default Welcome;

import NavbarWelcome from "../../components/navbar_welcome/NavbarWelcome";
import "./welcome.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <NavbarWelcome />

        <section className="welcomeContainer">

          <div className="welcomeText">
            <p>Welcome to our virtual class!</p>
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

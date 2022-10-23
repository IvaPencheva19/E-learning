import SidebarStudent from "../../components/sidebar_student/SidebarStudent";
import SidebarTeacher from "../../components/sidebar_teacher/SidebarTeacher";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import FeaturedStudent from "../../components/featured_student/FeaturedStudent";
import FeaturedTeacher from "../../components/featured_teacher/FeaturedTeacher";
import Chart from "../../components/chart/Chart";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="home">

      {user.role === 'Student'
        ? <SidebarStudent />
        : <SidebarTeacher />
      }

      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
        <div className="charts">

          {user.role === 'Student'
            ? <FeaturedStudent />
            : <FeaturedTeacher />
          }

          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;

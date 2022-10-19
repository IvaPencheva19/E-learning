import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./all_courses.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Home;

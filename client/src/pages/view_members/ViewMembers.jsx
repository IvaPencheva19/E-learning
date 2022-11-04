import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./view_members.scss";
import { useEffect, useState } from "react";
import * as courseService from "../../services/courseService";
import Widget from "../../components/widget/Widget";
import {
  LOCAL_STORAGE_KEY,
  SERVER_AUTHORIZATION_HEADER_NAME,
} from "../../config/constants";
const ViewMembers = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        Members{" "}
      </div>
    </div>
  );
};

export default ViewMembers;

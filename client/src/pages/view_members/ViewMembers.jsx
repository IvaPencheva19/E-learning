import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./view_members.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as courseService from "../../services/courseService";
import Table from "../../components/table/Table";
const ViewMembers = () => {
  let { id } = useParams();

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Table courseId={id} />
      </div>
    </div>
  );
};

export default ViewMembers;

import "./course_container.scss";
import InsightsIcon from "@mui/icons-material/Insights";
import * as React from "react";
import Chip from "@mui/material/Chip";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TopicAccordionStudent from "./topic_accordion/TopicAccordionStudent";
import * as topicService from "../../services/topicService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddTopicDialog from "./add_topic_dialog/AddTopicDialog";
import { theme } from "../../utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import GroupsIcon from "@mui/icons-material/Groups";
import {
  LOCAL_STORAGE_KEY,
  SERVER_AUTHORIZATION_HEADER_NAME,
} from "../../config/constants";
const CourseContainerStudent = ({ course }) => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [reload, setReload] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleViewMemebers = () => {
    navigate(`/course/${course._id}/members`);
  };

  const [topics, setTopics] = useState([]);
  let i = 1;
  //console.log(topics);
  useEffect(() => {
    topicService
      .getTopics(course._id)
      .then((result) => {
        setTopics((oldState) => [...result]);
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [course]);

  useEffect(() => {
    topicService
      .getTopics(course._id)
      .then((result) => {
        setTopics((oldState) => [...result]);
        setReload(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [topics]);
  return (
    <ThemeProvider theme={theme}>
      <div className="course">
        <div className="left">
          <span className="title">
            {course.name}
            <span id="category">
              {" "}
              <Chip
                label={course.category}
                sx={{
                  color: "secondary.main",
                  bgcolor: "rgb(160, 160, 160,0.1)",
                }}
              />
            </span>
          </span>
          <span className="desc"> {course.description}</span>
        </div>

        <div className="right">
          <div className="percentage positive">
            <InsightsIcon />
          </div>
        </div>
      </div>

      <div className="accordion">
        {topics.length > 0 ? (
          topics.map((x) => (
            <TopicAccordionStudent
              key={x._id}
              topic={x}
              num={i++}
              idCourse={course._id}
            />
          ))
        ) : (
          <p>No topics available!</p>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CourseContainerStudent;

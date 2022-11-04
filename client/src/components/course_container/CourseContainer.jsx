import "./course_container.scss";
import InsightsIcon from "@mui/icons-material/Insights";
import { Link } from "react-router-dom";
import * as React from "react";
import Chip from "@mui/material/Chip";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TopicAccordion from "./topic_accordion/TopicAccordion";
import * as topicService from "../../services/topicService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AddTopicDialog from "./add_topic_dialog/AddTopicDialog";
import { theme } from "../../utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import GroupsIcon from "@mui/icons-material/Groups";
const CourseContainer = ({ course }) => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
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
      })
      .catch((err) => {
        console.error(err);
      });
  }, [course, topics]);

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
          <span>
            <Chip
              className="viewMembers"
              label="View Members"
              icon={<GroupsIcon />}
              onClick={handleViewMemebers}
            />
          </span>
        </div>

        <div className="right">
          <div className="percentage positive">
            <InsightsIcon />
          </div>
        </div>
      </div>
      <Chip
        className="addChip"
        label="Add topic"
        icon={<AddCircleOutlineIcon />}
        onClick={handleClickOpen}
      />
      <div className="accordion">
        {topics.length > 0 ? (
          topics.map((x) => (
            <TopicAccordion key={x._id} name={x.name} num={i++} />
          ))
        ) : (
          <p>No topics available!</p>
        )}
        <AddTopicDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          courseId={course._id}
          setTopics={setTopics}
        />
      </div>
    </ThemeProvider>
  );
};

export default CourseContainer;

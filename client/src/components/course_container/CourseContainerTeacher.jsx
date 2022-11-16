import "./course_container.scss";
import InsightsIcon from "@mui/icons-material/Insights";
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
import GroupsIcon from "@mui/icons-material/Groups";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import EditCourseDialog from "./edit_course_dialog/EditCourseDialog";

const CourseContainerTeacher = ({ course }) => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogEditCourse, setOpenDialogEditCourse] = useState(false);

  const [reload, setReload] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleViewMemebers = () => {
    navigate(`/course/${course._id}/members`);
  };

  const handleEditCourse = () => {
    setOpenDialogEditCourse(true);
  };

  const [topics, setTopics] = useState([]);
  let i = 1;
  const [startDate, setStartDate] = useState();
  const [finalDate, setFinalDate] = useState();

  const sliceDates = async () => {
    setStartDate(await course.startDate.toString().slice(0, 10));
    setFinalDate(await course.finalDate.toString().slice(0, 10));
  };

  useEffect(() => {
    sliceDates();
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
  }, [reload]);
  return (
    <ThemeProvider theme={theme}>
      <div className="course">
        <div className="left">
          <span className="title">
            {course.name}
            <Chip
              className="subject"
              label={course.subject}
              sx={{
                color: "secondary.main",
                bgcolor: "rgb(160, 160, 160,0.1)",
              }}
            />
          </span>
          <span className="desc"> {course.description}</span>

          <span className="chips">
            {" "}
            <Chip
              className="chip"
              label={"Start date: " + startDate}
              sx={{
                color: "secondary.main",
                bgcolor: "rgb(160, 160, 160,0.1)",
              }}
            />
            <Chip
              className="chip"
              label={"Final date: " + finalDate}
              sx={{
                color: "secondary.main",
                bgcolor: "rgb(160, 160, 160,0.1)",
              }}
            />
            <Chip
              className="chip viewMembers"
              label="View Members"
              icon={<GroupsIcon />}
              onClick={handleViewMemebers}
            />
          </span>
        </div>

        <div className="right">
          <EditIcon sx={{}} onClick={handleEditCourse} />
        </div>
      </div>
      <Button
        className="addTopic"
        variant="contained"
        startIcon={<AddCircleOutlineIcon />}
        onClick={handleClickOpen}
        sx={{ textTransform: "none" }}
      >
        Add Topic
      </Button>
      <div className="accordion">
        {topics.length > 0 ? (
          topics.map((x) => (
            <TopicAccordion
              key={x._id}
              topic={x}
              num={i++}
              idCourse={course._id}
            />
          ))
        ) : (
          <p>No topics available!</p>
        )}
        <AddTopicDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          courseId={course._id}
          setReload={setReload}
        />
        <EditCourseDialog
          openDialogEditCourse={openDialogEditCourse}
          setOpenDialogEditCourse={setOpenDialogEditCourse}
          course={course}
          setReload={setReload}
        />
      </div>
    </ThemeProvider>
  );
};

export default CourseContainerTeacher;

import "./course_container.scss";
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
import Footer from "../../components/footer/Footer";

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

  const handleAddQuiz = () => {
    navigate(`/course/${course._id}/addQuiz`);
  };

  let i = 1;
  const [topics, setTopics] = useState([]);
  const [startDate, setStartDate] = useState();
  const [finalDate, setFinalDate] = useState();

  const sliceDates = async () => {
    setStartDate(await course.startDate?.toString().slice(0, 10));
    setFinalDate(await course.finalDate?.toString().slice(0, 10));
  };

  useEffect(() => {
    sliceDates();

    topicService
      .getTopics(course._id)
      .then((result) => {
        setTopics((oldState) => [...result]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [course]);

  return (
    <ThemeProvider theme={theme}>
      <div className="course">
        <div className="left">
          <span className="titleCourse">
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
      <div className="addButtons">
        <Button
          className="addQuiz"
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleAddQuiz}
          sx={{ textTransform: "none" }}
        >
          Add Quiz
        </Button>
        <Button
          className="addTopic"
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleClickOpen}
          sx={{ textTransform: "none" }}
        >
          Add Topic
        </Button>
      </div>
      <div className="accordion">
        {topics.length > 0 ? (
          topics.map((x) => (
            <TopicAccordion
              key={x._id}
              topic={x}
              num={i++}
              idCourse={course._id}
              setTopics={setTopics}
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
          setTopics={setTopics}
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

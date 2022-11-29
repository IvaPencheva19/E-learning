import "./add_quiz.scss";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../utils/theme";
import { minLengthValidator } from "../../utils/validators";
import { dateValidator } from "../../utils/validators";
import { finalDateValidator } from "../../utils/validators";
import * as quizService from "../../services/quizService";
import { useNavigate } from "react-router-dom";
import Question from "./question_container/Question";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useParams } from "react-router-dom";

export default function AddCourse() {
  const navigate = useNavigate();
  let { id } = useParams();

  const [questionBlocks, setQuestionBlocks] = useState([]);
  const [questionsCount, setQuestionsCount] = useState(0);
  const [allQuestionChecked, setAllQuestionChecked] = useState(true);

  const handleAddQuestion = () => {
    const abc = [...questionBlocks, []];
    setQuestionBlocks(abc);
  };
  const handleDelete = (i) => {
    const deleteVal = [...questionBlocks];

    deleteVal.splice(i, 1);
    setQuestionBlocks(deleteVal);
  };

  const [errors, setErrors] = useState({
    startDate: "",
    startTime: "",
    endTime: "",
    title: "",
  });
  const [values, setValues] = useState({
    startDate: "",
    startTime: "",
    endTime: "",
    title: "",
  });

  const changeHandler = (e) => {
    setErrors((errors) => ({
      ...errors,
      serverMsg: "",
    }));

    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let countCheckedAnswers = 0;

    questionBlocks.forEach((element) => {
      if (element.find((a) => "radio" in a)) {
        countCheckedAnswers++;
      }
    });

    if (questionBlocks.length !== countCheckedAnswers) {
      setAllQuestionChecked(false);
    } else {
      quizService
        .addQuiz(id, values, questionBlocks)
        .then((result) => {
          navigate("/home");
        })
        .catch((err) => {
          setErrors((errors) => ({
            ...errors,
            serverMsg: err.message,
          }));
        });
    }
  };

  const isFormUnvalid = Object.values(errors).some((x) => x);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100%" }}>
        <Grid item xs={false} sm={4} md={2} sx={{}} />
        <Grid item xs={12} sm={8} md={8} elevation={6} className="Form2">
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <AppRegistrationIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add quiz
            </Typography>
            <ValidatorForm onSubmit={handleSubmit}>
              <Button
                className="createQuiz"
                variant="contained"
                startIcon={<AddCircleOutlineIcon />}
                fullWidth
                sx={{ textTransform: "none" }}
                type="submit"
              >
                Create quiz
              </Button>
              <TextField
                color="secondary"
                margin="normal"
                className="textField"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="text"
                autoFocus
                value={values.title}
                onChange={changeHandler}
                onKeyUp={(e) => minLengthValidator(e, 2, setErrors, values)}
                error={errors.title ? true : false}
                helperText={
                  errors.name ? "Title must be at least 2 characters" : ""
                }
              />
              <TextField
                className="textField"
                id="startDate"
                label="Start Date"
                type="date"
                color="secondary"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                name="startDate"
                fullWidth
                margin="normal"
                onChange={changeHandler}
                onBlur={(e) => dateValidator(e, setErrors, values)}
                error={errors.startDate ? true : false}
                helperText={
                  errors.startDate ? "Start date must not be past" : ""
                }
              />
              <TextField
                className="textField"
                id="startTime"
                label="Start Time"
                type="time"
                color="secondary"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                name="startTime"
                fullWidth
                margin="normal"
                onChange={changeHandler}
              />
              <TextField
                className="textField"
                id="endTime"
                label="End Time"
                type="time"
                color="secondary"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                name="endTime"
                fullWidth
                margin="normal"
                onChange={changeHandler}
                onBlur={(e) => dateValidator(e, setErrors, values)}
              />
              <Typography
                style={allQuestionChecked ? { display: "none" } : {}}
                sx={{ color: "red", m: 1 }}
              >
                All questions mush have checked right answer!
              </Typography>

              {questionBlocks.map((data, i) => {
                return (
                  <Question
                    key={i} //da e vseki put edno sashto, unikalno
                    questionNum={i + 1}
                    handleDelete={handleDelete}
                    questionBlocks={questionBlocks}
                    setQuestionBlocks={setQuestionBlocks}
                    value={data}
                  />
                );
              })}
              <IconButton
                aria-label="delete"
                size="large"
                className="addQuestion"
                sx={{ bgcolor: "secondary.main" }}
                onClick={handleAddQuestion}
              >
                <AddIcon fontSize="inherit" />
              </IconButton>
            </ValidatorForm>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            ></Box>
          </Box>
        </Grid>
        <Grid item xs={false} sm={4} md={2} sx={{}} />
      </Grid>
    </ThemeProvider>
  );
}

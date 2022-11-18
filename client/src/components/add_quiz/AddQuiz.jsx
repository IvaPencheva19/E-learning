import "./add_quiz.scss";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import SelectSubject from "../../components/select/SelectSubject";
import SelectCategory from "../../components/select/SelectCategory";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../utils/theme";
import { minLengthValidator } from "../../utils/validators";
import { dateValidator } from "../../utils/validators";
import { finalDateValidator } from "../../utils/validators";
import * as courseService from "../../services/courseService";
import { useNavigate } from "react-router-dom";
import Question from "./question_continer/Question";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import {
  LOCAL_STORAGE_KEY,
  SERVER_AUTHORIZATION_HEADER_NAME,
} from "../../config/constants";

export default function AddCourse() {
  const authData = localStorage.getItem(LOCAL_STORAGE_KEY);

  const auth = JSON.parse(authData || "{}");

  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    name: "",
    startDate: "",
    finalDate: "",
  });
  const [values, setValues] = useState({
    name: "",
    subject: "",
    description: "",
    category: "",
    startDate: "2023-05-24T10:30",
    finalDate: "2024-05-24T10:30",
    user: auth._id,
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

    courseService
      .addCourse(values)
      .then((result) => {
        navigate("/home");
      })
      .catch((err) => {
        setErrors((errors) => ({
          ...errors,
          serverMsg: err.message,
        }));
      });
  };

  const handleAddQuestion = () => {
    return React.createElement(() => (
      <div>The componenthas not been created yet.</div>
    ));
  };

  const isFormUnvalid = Object.values(errors).some((x) => x);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100%" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={2} sx={{}} />
        <Grid item xs={12} sm={8} md={8} elevation={6} square className="Form2">
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
            <Button
              className="createQuiz"
              variant="contained"
              startIcon={<AddCircleOutlineIcon />}
              sx={{ textTransform: "none" }}
            >
              Create quiz
            </Button>
            <Question />

            <IconButton
              aria-label="delete"
              size="large"
              className="addQuestion"
              sx={{ bgcolor: "secondary.main" }}
              onClick={handleAddQuestion}
            >
              <AddIcon fontSize="inherit" />
            </IconButton>
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

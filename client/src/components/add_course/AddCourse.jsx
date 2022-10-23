import "./addCourse.scss";
import { useContext, useState } from "react";

import jwt from "jwt-decode";
import format from "date-fns/format";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { ThemeProvider } from "@mui/material/styles";
import SelectSubject from "../../components/select/SelectSubject";

import SelectCategory from "../../components/select/SelectCategory";

import { theme } from "../../utils/theme";
import { SERVER_AUTHORIZATION_HEADER_NAME } from "../../config/constants";
import { minLengthValidator } from "../../utils/validators";
import * as courseService from "../../services/courseService";
import { AuthContext } from "../../context/AuthContext";
import { Routes, Route, useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    ></Typography>
  );
}

export default function AddCourse() {
  const { backToHome } = useContext(AuthContext);

  const [errors, setErrors] = useState({
    name: "",
  });
  const [values, setValues] = useState({
    name: "",
    subject: "",
    description: "",
    category: "",
    startDate: "2023-05-24T10:30",
    finalDate: "2024-05-24T10:30",
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
  const changeHandlerDate = (e) => {
    console.log(e.target.value);
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
        console.log(result);
        backToHome();
      })
      .catch((err) => {
        setErrors((errors) => ({
          ...errors,
          serverMsg: err.message,
        }));
      });
  };
  const isFormUnvalid = Object.values(errors).some((x) => x);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: "100%" }}
        className="gradientContainer"
      >
        <CssBaseline />
        <Grid item xs={false} sm={4} md={2} sx={{}} />
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          component={Paper}
          elevation={6}
          square
          className="Form"
        >
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
              Add course
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="text"
                autoFocus
                value={values.email}
                onChange={changeHandler}
                onBlur={(e) => minLengthValidator(e, 2, setErrors, values)}
              />
              {errors.name && (
                <p style={{ color: "red" }}>
                  {" "}
                  First name should be at least 2 characters long!
                </p>
              )}
              <SelectSubject
                changeHandler={changeHandler}
                subject={values.subject}
              />
              <SelectCategory
                changeHandler={changeHandler}
                category={values.category}
              />
              <TextField
                id="startDate"
                label="Start Date"
                type="date"
                color="secondary"
                required
                sx={{ width: "49%", marginRight: "2%" }}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                margin="normal"
                onChange={changeHandlerDate}
              />
              <TextField
                id="finalDate"
                label="Final Date"
                type="date"
                color="secondary"
                required
                sx={{ width: "49%" }}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                margin="normal"
                onChange={changeHandlerDate}
              />
              <textarea
                id="description"
                name="description"
                placeholder="Description..."
                onChange={changeHandler}
              />
              <Button
                className="Button"
                type="submit"
                fullWidth
                variant="contained"
                disabled={isFormUnvalid}
                sx={{
                  mt: 3,
                  mb: 2,
                  color: "white",
                }}
              >
                Add course
              </Button>
              <Grid container></Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={false} sm={4} md={2} sx={{}} />
      </Grid>
    </ThemeProvider>
  );
}

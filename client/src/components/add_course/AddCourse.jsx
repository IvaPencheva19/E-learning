import "./addCourse.scss";
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
import {
  LOCAL_STORAGE_KEY,
  SERVER_AUTHORIZATION_HEADER_NAME,
} from "../../config/constants";

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

  const isFormUnvalid = Object.values(errors).some((x) => x);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: "100%" }}
        className="gradientContainer"
      >
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
                className="textField"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="text"
                autoFocus
                value={values.name}
                onChange={changeHandler}
                onKeyUp={(e) => minLengthValidator(e, 2, setErrors, values)}
                error={errors.name ? true : false}
                helperText={
                  errors.name ? "Name must be at least 2 characters" : ""
                }
              />

              <SelectSubject
                changeHandler={changeHandler}
                subject={values.subject}
              />
              <SelectCategory
                changeHandler={changeHandler}
                category={values.category}
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
                id="finalDate"
                label="Final Date"
                type="date"
                color="secondary"
                name="finalDate"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                margin="normal"
                onChange={changeHandler}
                error={errors.finalDate ? true : false}
                onBlur={(e) => finalDateValidator(e, setErrors, values)}
                helperText={
                  errors.finalDate ? "Final date must not be past or today" : ""
                }
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

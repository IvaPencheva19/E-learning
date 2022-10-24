import "./register.scss";
import { useContext, useState } from "react";
import jwt from "jwt-decode";

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

import BasicSelect from "../../components/select/Select";
import Navbar from "../../components/navbar_welcome/Navbar";

import { theme } from "../../utils/theme";
import { SERVER_AUTHORIZATION_HEADER_NAME } from "../../config/constants";
import {
  emailValidator,
  passwordDoNotMatch,
  minLengthValidator,
} from "../../utils/validators";
import * as authService from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";

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

export default function Register() {
  const { userLogin } = useContext(AuthContext);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    username: "",
    repeatPassword: "",
    firstName: "",
    lastName: "",
  });
  const [values, setValues] = useState({
    serverMsg: "",
    email: "",
    role: "",
    subjects: [],
    password: "",
    username: "",
    repeatPassword: "",
    firstName: "",
    lastName: "",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
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

    authService
      .register(values)
      .then((result) => {
        const user = jwt(result[SERVER_AUTHORIZATION_HEADER_NAME]);
        user[SERVER_AUTHORIZATION_HEADER_NAME] =
          result[SERVER_AUTHORIZATION_HEADER_NAME];

        userLogin(user);
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
      <Navbar />
      <Grid
        container
        component="main"
        sx={{ height: "100%" }}
        className="gradientContainer"
      >
        <CssBaseline />
        <Grid item xs={false} sm={4} md={4} sx={{}} />
        <Grid
          item
          xs={12}
          sm={8}
          md={4}
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
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              {errors.serverMsg && (
                <p style={{ color: "red" }}>{errors.serverMsg}</p>
              )}
              <TextField
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={values.email}
                onChange={changeHandler}
                onKeyUp={(e) => emailValidator(e, setErrors)}
                onBlur={(e) => emailValidator(e, setErrors)}
                error={errors.email ? true : false}
                helperText={errors.email ? "Email is not valid!" : ""}
              />

              <TextField
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="text"
                value={values.username}
                onChange={changeHandler}
                onBlur={(e) => minLengthValidator(e, 2, setErrors, values)}
                onKeyUp={(e) => minLengthValidator(e, 2, setErrors, values)}
                error={errors.username ? true : false}
                helperText={
                  errors.username
                    ? "Username should be at least 2 characters long!"
                    : ""
                }
              />

              <TextField
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First name"
                name="firstName"
                autoComplete="text"
                value={values.firstName}
                onChange={changeHandler}
                onBlur={(e) => minLengthValidator(e, 2, setErrors, values)}
                onKeyUp={(e) => minLengthValidator(e, 2, setErrors, values)}
                error={errors.firstName ? true : false}
                helperText={
                  errors.firstName
                    ? "First name should be at least 2 characters long!"
                    : ""
                }
              />

              <TextField
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last name"
                name="lastName"
                autoComplete="text"
                value={values.lastName}
                onChange={changeHandler}
                onBlur={(e) => minLengthValidator(e, 2, setErrors, values)}
                onKeyUp={(e) => minLengthValidator(e, 2, setErrors, values)}
                error={errors.lastName ? true : false}
                helperText={
                  errors.lastName
                    ? "Last name should be at least 2 characters long!"
                    : ""
                }
              />

              <TextField
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="imageUrl"
                label="Image url"
                name="imageUrl"
                autoComplete="text"
                value={values.imageUrl}
                onChange={changeHandler}
                // onBlur={(e) => minLengthValidator(e, 2, setErrors, values)}
              />

              <BasicSelect
                changeHandler={changeHandler}
                role={values.role}
                title="Role"
                type="role"
              />

              <TextField
                color="secondary"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={values.password}
                onChange={changeHandler}
                onBlur={(e) => minLengthValidator(e, 8, setErrors, values)}
                onKeyUp={(e) => minLengthValidator(e, 8, setErrors, values)}
                error={errors.password ? true : false}
                helperText={
                  errors.password
                    ? "  Password should be at least 8 characters long!"
                    : ""
                }
              />

              <TextField
                color="secondary"
                margin="normal"
                required
                fullWidth
                name="repeatPassword"
                label="Repeat password"
                type="password"
                id="repeatPassword"
                autoComplete="current-password"
                value={values.repeatPassword}
                onChange={changeHandler}
                onKeyUp={(e) => passwordDoNotMatch(values, setErrors)}
                onBlur={(e) => passwordDoNotMatch(values, setErrors)}
                error={errors.repeatPassword ? true : false}
                helperText={
                  errors.repeatPassword ? " Passwords do not match!" : ""
                }
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
                Register
              </Button>
              <Grid container></Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={false} sm={4} md={4} sx={{}} />
      </Grid>
    </ThemeProvider>
  );
}

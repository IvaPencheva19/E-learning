import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MultipleSelectChip from "../../components/chip/Chip";
import BasicSelect from "../../components/select/Select";

import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { ThemeProvider } from "@mui/material/styles";

import "./register.scss";
import { theme } from "./theme";

import {emailValidator, passwordDoNotMatch, minLengthValidator} from "../../utils/validators";

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
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    firstName: '',
    lastName: '',
  });

  const [values, setValues] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    firstName: '',
    lastName: ''
  });

  const changeHandler = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  }

  

  const isFormUnvalid = Object.values(errors).some(x => x);

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      email,
      password,
      repeatPassword,
      firstName,
      lastName } = values;

    console.log({
      email,
      password,
      repeatPassword,
      firstName,
      lastName,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          className="gradientContainer"
          item
          xs={false}
          sm={4}
          md={4}
          sx={{}}
        />
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
                onBlur={(e) => emailValidator(e, setErrors)}
              />
              {errors.email &&
                <p style={{ color: 'red' }}>Email is not valid!</p>
              }
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
              />
              {errors.firstName &&
                <p style={{ color: 'red' }}>First name should be at least 2 characters long!</p>
              }
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
              />
              {errors.lastName &&
                <p style={{ color: 'red' }}>Last name should be at least 2 characters long!</p>
              }
              <BasicSelect />
              <MultipleSelectChip />
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
              />
              {errors.password &&
                <p style={{ color: 'red' }}>Password should be at least 8 characters long!</p>
              }
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
              />
              {errors.repeatPassword &&
                <p style={{ color: 'red' }}>Passwords do not match!</p>
              }
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
        <Grid
          className="gradientContainer"
          item
          xs={false}
          sm={4}
          md={4}
          sx={{}}
        />
      </Grid>
    </ThemeProvider>
  );
}

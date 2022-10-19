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
import Navbar from "../../components/navbar_welcome/Navbar";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { ThemeProvider } from "@mui/material/styles";

import "./addCourse.scss";
import { theme } from "../../utils/theme";

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
  const [values, setValues] = useState({
    email: "",
    password: "",
    username: "",
    repeatPassword: "",
    firstName: "",
    lastName: "",
  });

  const changeHandler = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password, repeatPassword, firstName, lastName } = values;
  };

  return (
    <ThemeProvider theme={theme}>
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={values.email}
                onChange={changeHandler}
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
              />

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
              />

              <Button
                className="Button"
                type="submit"
                fullWidth
                variant="contained"
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
        <Grid item xs={false} sm={4} md={4} sx={{}} />
      </Grid>
    </ThemeProvider>
  );
}

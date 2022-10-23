import "./login.scss";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt from "jwt-decode";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";

import Navbar from "../../components/navbar_welcome/Navbar";
import { SERVER_AUTHORIZATION_HEADER_NAME } from "../../config/constants";
import { theme } from "../../utils/theme";
import { emailValidator, minLengthValidator } from "../../utils/validators";
import * as authService from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";
import { CoPresentOutlined } from "@mui/icons-material";

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

const Login = () => {
  const { userLogin } = useContext(AuthContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    serverMsg: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setErrors((errors) => ({
      ...errors,
      serverMsg: "",
    }));

    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const isFormUnvalid = Object.values(errors).some((x) => x);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = values;

    authService
      .login({ email, password })
      .then((result) => {
        const user = jwt(result[SERVER_AUTHORIZATION_HEADER_NAME]);
        user[SERVER_AUTHORIZATION_HEADER_NAME] =
          result[SERVER_AUTHORIZATION_HEADER_NAME];
        console.log(user[SERVER_AUTHORIZATION_HEADER_NAME]);
        userLogin(user);
      })
      .catch((err) => {
        setErrors((errors) => ({
          ...errors,
          serverMsg: err.message,
        }));
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Grid
        container
        component="main"
        sx={{ height: "100vh" }}
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
          sx={{}}
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
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <ValidatorForm onSubmit={handleSubmit}>
              {errors.serverMsg && (
                <p style={{ color: "red" }}>{errors.serverMsg}</p>
              )}
              <TextValidator
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={changeHandler}
                value={values.email}
                onBlur={(e) => emailValidator(e, setErrors)}
              />
              {errors.email && (
                <p style={{ color: "red" }}>Email is not valid!</p>
              )}
              <TextValidator
                color="secondary"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={changeHandler}
                value={values.password}
                onKeyUp={(e) => minLengthValidator(e, 8, setErrors, values)}
              />
              {errors.password && (
                <p style={{ color: "red" }}>
                  Password should be at least 8 characters long!
                </p>
              )}
              <FormControlLabel
                control={<Checkbox value="remember" color="secondary" />}
                label="Remember me"
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
                disabled={isFormUnvalid}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="/passwordRecovery"
                    variant="body2"
                    sx={{ color: "secondary.main" }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="/register"
                    variant="body2"
                    sx={{ color: "secondary.main" }}
                  >
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </ValidatorForm>
          </Box>
        </Grid>
        <Grid item xs={false} sm={4} md={4} sx={{}} />
      </Grid>
    </ThemeProvider>
  );
};

export default Login;

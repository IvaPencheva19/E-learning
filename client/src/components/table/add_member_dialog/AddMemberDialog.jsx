import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./add_member_dialog.scss";
import { theme } from "../../../utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useContext, useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import * as courseService from "../../../services/courseService";

function AddMemberDialog({
  openDialog,
  setOpenDialog,
  setStudents,
  setReload,
  course,
}) {
  const [values, setValues] = useState({
    username: "",
  });

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    courseService
      .addCourseMember(course, values.username)
      .then((result) => {
        setReload(true);
      })
      .catch((err) => {});

    setOpenDialog(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="dialog">
        <Dialog open={openDialog} onClose={handleClose}>
          <DialogTitle>Add Member</DialogTitle>
          <ValidatorForm onSubmit={handleSubmit}>
            <DialogContent>
              <DialogContentText></DialogContentText>

              <TextField
                autoFocus
                margin="dense"
                id="username"
                label="Username"
                name="username"
                type="text"
                fullWidth
                color="secondary"
                variant="standard"
                onChange={changeHandler}
                value={values.name}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Add</Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}

export default AddMemberDialog;

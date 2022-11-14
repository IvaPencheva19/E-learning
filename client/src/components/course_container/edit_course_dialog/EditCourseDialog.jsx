import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { theme } from "../../../utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import * as courseService from "../../../services/courseService";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import SelectSubject from "../../../components/select/SelectSubject";
import { minLengthValidator } from "../../../utils/validators";
import { dateValidator } from "../../../utils/validators";
import { finalDateValidator } from "../../../utils/validators";
import {
  LOCAL_STORAGE_KEY,
  SERVER_AUTHORIZATION_HEADER_NAME,
} from "../../../config/constants";
const authData = localStorage.getItem(LOCAL_STORAGE_KEY);

const auth = JSON.parse(authData || "{}");
function EditCourseDialog({
  openDialogEditCourse,
  setOpenDialogEditCourse,
  setReload,
  course,
}) {
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
    startDate: "",
    finalDate: "",
  });
  useEffect(() => {
    setValues((state) => ({
      ...state,
      name: course.name,
      subject: course.subject,
      description: course.description,
      startDate: course.startDate,
      finalDate: course.finalDate,
    }));
  }, [course]);

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
  const handleClose = () => {
    setValues((state) => ({
      ...state,
      name: course.name,
      subject: course.subject,
      description: course.description,
      startDate: course.startDate,
      finalDate: course.finalDate,
    }));
    setOpenDialogEditCourse(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    courseService
      .updateCourse(course._id, values)
      .then((result) => {
        console.log(result);
        setReload(true);
      })
      .catch((err) => {});

    setOpenDialogEditCourse(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="dialog">
        <Dialog open={openDialogEditCourse} onClose={handleClose}>
          <DialogTitle>Edit course</DialogTitle>
          <ValidatorForm onSubmit={handleSubmit}>
            <DialogContent>
              <DialogContentText></DialogContentText>

              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                name="name"
                type="text"
                fullWidth
                color="secondary"
                onChange={changeHandler}
                value={values.name}
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
                // value={values.startDate}
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
                // value={values.finalDate}
              />
              <TextareaAutosize
                id="description"
                name="description"
                aria-label="empty textarea"
                placeholder="Description..."
                onChange={changeHandler}
                value={values.description}
                style={{ height: 100 }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Edit</Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}

export default EditCourseDialog;

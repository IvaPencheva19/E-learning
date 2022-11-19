import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./add_topic_dialog.scss";
import { theme } from "../../../utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
import * as topicService from "../../../services/topicService";

function AddTopicDialog({ openDialog,
  setOpenDialog,
  courseId,
  setReload,
  setTopics
}) {
  const [values, setValues] = useState({
    name: "",
    materials: [],
  });

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClose = () => {
    setOpenDialog(false);
    values.name = '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, materials } = values;

    topicService
      .addTopic(courseId, name, materials)
      .then((result) => {
        setTopics((oldState) => [...oldState, result]);
      })
      .catch((err) => {
        console.error(err);
      });

    values.name = '';
    setOpenDialog(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="dialog">
        <Dialog open={openDialog} onClose={handleClose}>
          <DialogTitle>Add Topic</DialogTitle>
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

export default AddTopicDialog;

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
import { useState } from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
import * as topicService from "../../../services/topicService";

function EditTopicDialog({
  openDialogEditTopic,
  setOpenDialogEditTopic,
  setReload,
  idTopic,
  nameTopic,
}) {
  const [values, setValues] = useState({
    name: nameTopic,
  });

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClose = () => {
    setOpenDialogEditTopic(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    topicService
      .editTopic(idTopic, values.name)
      .then((result) => {
        console.log(result);
        setReload(true);
      })
      .catch((err) => { });
    console.log(idTopic);
    setOpenDialogEditTopic(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="dialog">
        <Dialog open={openDialogEditTopic} onClose={handleClose}>
          <DialogTitle>Edit name</DialogTitle>
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
              <Button type="submit">Edit</Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}

export default EditTopicDialog;

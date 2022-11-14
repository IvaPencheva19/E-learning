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
import { useContext, useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import * as topicService from "../../../services/topicService";

function AddMaterialDialog({
  openDialogAddMaterial,
  setOpenDialogAddMaterial,
  setReload,
  idTopic,
}) {
  const [values, setValues] = useState({
    material: "",
  });

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClose = () => {
    setOpenDialogAddMaterial(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    topicService
      .addMaterial(idTopic, values.material)
      .then((result) => {
        setReload(true);
      })
      .catch((err) => {});
    setOpenDialogAddMaterial(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="dialog">
        <Dialog open={openDialogAddMaterial} onClose={handleClose}>
          <DialogTitle>Add Material</DialogTitle>
          <ValidatorForm onSubmit={handleSubmit}>
            <DialogContent>
              <DialogContentText></DialogContentText>

              <TextField
                autoFocus
                margin="dense"
                id="material"
                label="Material"
                name="material"
                type="text"
                fullWidth
                color="secondary"
                variant="standard"
                onChange={changeHandler}
                value={values.material}
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

export default AddMaterialDialog;

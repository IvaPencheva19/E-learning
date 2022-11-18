import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as topicService from "../../../services/topicService";

const DeleteMaterialDialog = ({
  openAlertDialogMaterial,
  setOpenAlertDialogMaterial,
  setReload,
  idTopic,
  deleteMaterial,
  setTopics
}) => {

  const handleAgreeClose = () => {
    topicService
      .deleteMaterial(idTopic, deleteMaterial)
      .then((result) => {
        setTopics((oldState) => {
          return oldState.map(x => x._id == result._id ? result : x);
        });
        setReload(true);
      })
      .catch((err) => {
        console.error(err);
      });

    setOpenAlertDialogMaterial(false);
  };

  const handleDisagreeClose = () => {
    setOpenAlertDialogMaterial(false);

  };

  return (
    <div>
      <Dialog
        open={openAlertDialogMaterial}
        onClose={handleDisagreeClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to remove material from this course?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagreeClose}>No</Button>
          <Button onClick={handleAgreeClose} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteMaterialDialog;

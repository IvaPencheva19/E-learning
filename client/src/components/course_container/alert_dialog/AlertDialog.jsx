import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as topicService from "../../../services/topicService";

function AlertDialog({
  openAlertDialog,
  setOpenAlertDialog,
  setReload,
  idTopic,
  idCourse,
}) {
  const handleAgreeClose = () => {
    // setAlertAnswer(true);
    topicService
      .removeTopic(idTopic, idCourse)
      .then((result) => {
        console.log(result);
        setReload(true);
      })
      .catch((err) => {
        console.error(err);
      });
    setOpenAlertDialog(false);
  };
  const handleDisagreeClose = () => {
    setOpenAlertDialog(false);
  };

  return (
    <div>
      <Dialog
        open={openAlertDialog}
        onClose={handleDisagreeClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to remove this topic?
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

export default AlertDialog;

import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as React from "react";
import Chip from "@mui/material/Chip";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddMemberDialog from "./add_member_dialog/AddMemberDialog";
import Button from "@mui/material/Button";
import AlertDialog from "./alert_dialog/AlertDialog";
import { theme } from "../../utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";

import * as courseService from "../../services/courseService";

const List = ({ courseId }) => {
  const [students, setStudents] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [removeStudent, setRemoveStudent] = useState();

  const [reload, setReload] = useState(false);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClickRemove = (e) => {
    setRemoveStudent(e.target.id);
    setOpenAlertDialog(true);
  };

  useEffect(() => {
    //console.log(courseId);
    courseService
      .getCourseMembers(courseId)
      .then((result) => {
        setStudents((oldState) => result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    //console.log(courseId);
    courseService
      .getCourseMembers(courseId)
      .then((result) => {
        setStudents((oldState) => result);
        setReload(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [reload]);
  return (
    <ThemeProvider theme={theme}>
      <div className="members">
        <div className="left">
          <span className="title">Members</span>
        </div>
      </div>
      <Button
        className="addMember"
        startIcon={<AddCircleOutlineIcon />}
        onClick={handleClickOpen}
        sx={{ textTransform: "none" }}
      >
        Add member
      </Button>

      <div className="studentsTable">
        {students.length > 0 ? (
          <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow className="tableRow">
                  <TableCell className="tableCell">Username</TableCell>
                  <TableCell className="tableCell">First Name</TableCell>
                  <TableCell className="tableCell">Last Name</TableCell>
                  <TableCell className="tableCell">Email</TableCell>
                  <TableCell className="tableCell"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student._id}>
                    <TableCell className="tableCell">
                      {" "}
                      <div className="cellWrapper">
                        <img src={student.imageUrl} alt="" className="image" />
                        {student.username}
                      </div>
                    </TableCell>
                    <TableCell className="tableCell">
                      {student.firstName}
                    </TableCell>
                    <TableCell className="tableCell">
                      {student.lastName}
                    </TableCell>
                    <TableCell className="tableCell">{student.email}</TableCell>
                    <TableCell className="tableCell">
                      <Button
                        className="removeChip"
                        variant="contained"
                        id={student.username}
                        name="chip"
                        startIcon={<RemoveCircleOutlineIcon />}
                        onClick={handleClickRemove}
                        sx={{ textTransform: "none" }}
                      >
                        Remove member
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <p>No members</p>
        )}
        <AddMemberDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          setStudents={setStudents}
          setReload={setReload}
          course={courseId}
        />
        <AlertDialog
          openAlertDialog={openAlertDialog}
          setOpenAlertDialog={setOpenAlertDialog}
          setReload={setReload}
          removeStudent={removeStudent}
          course={courseId}
        />
      </div>
    </ThemeProvider>
  );
};

export default List;

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import "./topic_accordion.scss";
import AlertDialog from "../alert_dialog/AlertDialog";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AlertDialogMaterial from "../alert_dialog_material/AlertDialogMaterial";
import AddMaterialDialog from "../add_material_dialog/AddMaterialDialog";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import EditTopicDialog from "../edit_topic_dialog/EditTopicDialog";

function TopicAccordionStudent({ num, topic, idCourse }) {
  const [expanded, setExpanded] = React.useState(false);
  const [reload, setReload] = useState(false);

  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [deleteTopic, setDeleteTopic] = useState();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClickRemove = () => {
    setOpenAlertDialog(true);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Topic {num}
          </Typography>
          <Typography sx={{ color: "text.secondary", width: "73%" }}>
            {topic.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {" "}
            {topic.materials.length > 0 ? (
              <TableContainer className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableBody>
                    {topic.materials.map((material) => (
                      <TableRow key={material._id}>
                        <TableCell className="tableCell">
                          {" "}
                          <a href={material} style={{ textDecoration: "none" }}>
                            {material}
                          </a>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <p>No materials available!</p>
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <AlertDialog
        openAlertDialog={openAlertDialog}
        setOpenAlertDialog={setOpenAlertDialog}
        setReload={setReload}
        idTopic={topic._id}
        idCourse={idCourse}
      />
    </div>
  );
}

export default TopicAccordionStudent;

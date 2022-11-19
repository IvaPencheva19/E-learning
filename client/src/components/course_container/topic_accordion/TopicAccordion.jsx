import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import "./topic_accordion.scss";
import DeleteTopicDialog from "../alert_dialog/AlertDialog";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import AddMaterialDialog from "../add_material_dialog/AddMaterialDialog";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import EditTopicDialog from "../edit_topic_dialog/EditTopicDialog";
import DeleteMaterialDialog from "../alert_dialog_material/AlertDialogMaterial";

function TopicAccordion({
  num,
  topic,
  idCourse,
  setTopics
}) {
  const [expanded, setExpanded] = React.useState(false);
  const [reload, setReload] = useState(false);

  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [openAlertDialogMaterial, setOpenAlertDialogMaterial] = useState(false);
  const [openDialogAddMaterial, setOpenDialogAddMaterial] = useState(false);
  const [openDialogEditTopic, setOpenDialogEditTopic] = useState(false);

  const [deleteMaterial, setDeleteMaterial] = useState();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClickRemove = () => {
    setOpenAlertDialog(true);
  };

  const handleClickRemoveMaterial = (e) => {
    setOpenAlertDialogMaterial(true);
    setDeleteMaterial(e.target.id);
  };

  const handleClickAddMaterial = (e) => {
    setOpenDialogAddMaterial(true);
  };

  const handleClickEditTopic = (e) => {
    setOpenDialogEditTopic(true);
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
          {" "}
          {topic.materials.length > 0 ? (
            <TableContainer className="table">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  {topic.materials.map((material) => (
                    <TableRow key={material}>
                      <TableCell className="tableCell">
                        {" "}
                        <a href={material} style={{ textDecoration: "none" }}>
                          {material}
                        </a>
                      </TableCell>
                      <TableCell className="tableCell">

                        <Button
                          className="deleteMaterialButton"
                          variant="contained"
                          name="chip"
                          id={material}
                          startIcon={<DeleteIcon />}
                          onClick={handleClickRemoveMaterial}
                          sx={{ textTransform: "none" }}
                        >
                          Delete
                        </Button>

                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <p>No materials available!</p>
          )}
          <div className="topicButtons">
            <div>
              <Button
                className="addMaterial"
                variant="contained"
                name="chip"
                startIcon={<AddCircleOutlineIcon />}
                onClick={handleClickAddMaterial}
                sx={{ textTransform: "none" }}
              >
                Add Material
              </Button>
            </div>
            <div>
              <Button
                className="editTopic"
                variant="contained"
                name="chip"
                startIcon={<EditIcon />}
                onClick={handleClickEditTopic}
                sx={{ textTransform: "none" }}
              >
                Edit Topic
              </Button>
            </div>
            <div>
              <Button
                className="deleteTopic"
                variant="contained"
                startIcon={<DeleteIcon />}
                onClick={handleClickRemove}
                sx={{ textTransform: "none" }}
              >
                Delete topic
              </Button>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <DeleteTopicDialog
        openAlertDialog={openAlertDialog}
        setOpenAlertDialog={setOpenAlertDialog}
        setReload={setReload}
        idTopic={topic._id}
        idCourse={idCourse}
        setTopics={setTopics}
      />

      <DeleteMaterialDialog
        openAlertDialogMaterial={openAlertDialogMaterial}
        setOpenAlertDialogMaterial={setOpenAlertDialogMaterial}
        setReload={setReload}
        idTopic={topic._id}
        deleteMaterial={deleteMaterial}
        setTopics={setTopics}
      />

      <AddMaterialDialog
        openDialogAddMaterial={openDialogAddMaterial}
        setOpenDialogAddMaterial={setOpenDialogAddMaterial}
        setReload={setReload}
        topic={topic}
        setTopics={setTopics}
      />

      <EditTopicDialog
        openDialogEditTopic={openDialogEditTopic}
        setOpenDialogEditTopic={setOpenDialogEditTopic}
        setReload={setReload}
        idTopic={topic._id}
        nameTopic={topic.name}
        setTopics={setTopics}
      />

    </div>
  );
}

export default TopicAccordion;

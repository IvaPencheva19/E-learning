import "./question.scss";
import InsightsIcon from "@mui/icons-material/Insights";
import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Question = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">
          {" "}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Question"
            name="name"
            type="text"
            color="secondary"
            variant="standard"
          />
        </span>
        <span className="answers">
          <TextField
            autoFocus
            margin="dense"
            id="answer1"
            label="Answer 1"
            name="answer1"
            type="text"
            fullWidth
            color="secondary"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="answer2"
            label="Answer 2"
            name="answer2"
            type="text"
            fullWidth
            color="secondary"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="answer3"
            label="Answer 3"
            name="answer3"
            type="text"
            fullWidth
            color="secondary"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="answer4"
            label="Answer 4"
            name="answer4"
            type="text"
            fullWidth
            color="secondary"
            variant="standard"
          />
        </span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <InsightsIcon />
        </div>
      </div>
    </div>
  );
};

export default Question;

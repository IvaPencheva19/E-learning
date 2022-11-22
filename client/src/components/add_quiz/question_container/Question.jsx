import "./question.scss";

import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import * as React from "react";
import Radio from "@mui/material/Radio";

const Question = ({
  questionNum,
  handleDelete,
  i,
  questionBlocks,
  setQuestionBlocks,
  value,
}) => {
  const deleteQuestion = () => {
    handleDelete(questionNum - 1);
  };

  const handleChange = (e) => {
    const inputData = [...questionBlocks];

    const inputIndex = inputData[questionNum - 1].indexOf(
      inputData[questionNum - 1].find((a) => e.target.name in a)
    );

    if (inputIndex > -1) {
      inputData[questionNum - 1][inputIndex] = {
        [e.target.name]: e.target.value,
      };
    } else {
      inputData[questionNum - 1].push({ [e.target.name]: e.target.value });
    }
    setQuestionBlocks(inputData);
  };

  const ariaLabel = { "aria-label": "description" };

  return (
    <div className="widgetQuestion">
      <div className="left">
        <span className="title">
          {" "}
          <Input
            placeholder="Question"
            inputProps={ariaLabel}
            sx={{ my: 2, ml: 2 }}
            fullWidth
            id={"q" + questionNum}
            name="title"
            onChange={(e) => handleChange(e)}
            value={
              value.indexOf(value.find((a) => "title" in a)) > -1
                ? value[value.indexOf(value.find((a) => "title" in a))].title
                : ""
            }
          />
        </span>
        <span className="answers">
          <Box sx={{ display: "flex", alignItems: "flex-end", ml: 2 }}>
            <Radio
              checked={
                value.indexOf(value.find((a) => "radio" in a)) > -1 &&
                value[value.indexOf(value.find((a) => "radio" in a))].radio ===
                  "answer1"
              }
              onChange={handleChange}
              value="answer1"
              name="radio"
              inputProps={{ "aria-label": "answer1" }}
            />
            <Input
              placeholder="Answer 1"
              inputProps={ariaLabel}
              sx={{ my: 1 }}
              id={"q" + questionNum + "a1"}
              onChange={(e) => handleChange(e)}
              name="answer1"
              value={
                value.indexOf(value.find((a) => "answer1" in a)) > -1
                  ? value[value.indexOf(value.find((a) => "answer1" in a))]
                      .answer1
                  : ""
              }
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", ml: 2 }}>
            <Radio
              checked={
                value.indexOf(value.find((a) => "radio" in a)) > -1 &&
                value[value.indexOf(value.find((a) => "radio" in a))].radio ===
                  "answer2"
              }
              onChange={handleChange}
              value="answer2"
              name="radio"
              inputProps={{ "aria-label": "answer2" }}
            />

            <Input
              placeholder="Answer 2"
              inputProps={ariaLabel}
              sx={{ my: 1 }}
              id={"q" + questionNum + "a2"}
              onChange={(e) => handleChange(e)}
              name="answer2"
              value={
                value.indexOf(value.find((a) => "answer2" in a)) > -1
                  ? value[value.indexOf(value.find((a) => "answer2" in a))]
                      .answer2
                  : ""
              }
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", ml: 2 }}>
            <Radio
              checked={
                value.indexOf(value.find((a) => "radio" in a)) > -1 &&
                value[value.indexOf(value.find((a) => "radio" in a))].radio ===
                  "answer3"
              }
              onChange={handleChange}
              value="answer3"
              name="radio"
              inputProps={{ "aria-label": "answer3" }}
            />
            <Input
              placeholder="Answer 3"
              inputProps={ariaLabel}
              sx={{ my: 1 }}
              id={"q" + questionNum + "a3"}
              onChange={(e) => handleChange(e)}
              name="answer3"
              value={
                value.indexOf(value.find((a) => "answer3" in a)) > -1
                  ? value[value.indexOf(value.find((a) => "answer3" in a))]
                      .answer3
                  : ""
              }
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", ml: 2 }}>
            <Radio
              checked={
                value.indexOf(value.find((a) => "radio" in a)) > -1 &&
                value[value.indexOf(value.find((a) => "radio" in a))].radio ===
                  "answer4"
              }
              onChange={handleChange}
              value="answer4"
              name="radio"
              inputProps={{ "aria-label": "answer4" }}
            />
            <Input
              placeholder="Answer 4"
              inputProps={ariaLabel}
              sx={{ my: 1 }}
              id={"q" + questionNum + "a4"}
              onChange={(e) => handleChange(e)}
              name="answer4"
              value={
                value.indexOf(value.find((a) => "answer4" in a)) > -1
                  ? value[value.indexOf(value.find((a) => "answer4" in a))]
                      .answer4
                  : ""
              }
            />
          </Box>
        </span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <IconButton
            aria-label="delete"
            size="large"
            sx={{ color: "#ff704d" }}
            onClick={deleteQuestion}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Question;

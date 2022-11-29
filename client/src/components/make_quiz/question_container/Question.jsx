import "./question.scss";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Question = ({ question, setCheckedAnswers, checkedAnswers }) => {
  const ariaLabel = { "aria-label": "description" };

  const handleChange = (e) => {
    let answers = [...checkedAnswers];
    const inputIndex = answers.indexOf(answers.find((a) => question._id in a));
    if (inputIndex > -1) {
      answers[inputIndex] = { [question._id]: e.target.value };
    } else {
      answers.push({ [question._id]: e.target.value });
    }
    setCheckedAnswers(answers);
    // console.log(checkedAnswers);
  };

  return (
    <div className="widgetQuestionStudent">
      <div className="left">
        <span className="titleQuestion">{question.title}</span>
        <span className="answersStudents">
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            // value={value}
          >
            {question.answers?.map((data, i) => {
              return (
                <FormControlLabel
                  key={data._id}
                  value={data._id}
                  control={<Radio />}
                  label={data.value}
                  onChange={handleChange}
                />
              );
            })}
          </RadioGroup>
        </span>
      </div>
      <div className="right">
        <div className="percentage positive"></div>
      </div>
    </div>
  );
};

export default Question;

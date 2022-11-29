import "./question.scss";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { theme } from "../../../utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import Quiz from "@mui/icons-material/Quiz";

const ResultQuestion = ({ question, resultAnswers, trueAnswers }) => {
  const ariaLabel = { "aria-label": "description" };
  const resultAnswersIds = resultAnswers.map((data) => {
    return data._id;
  });
  const trueAnswersIds = trueAnswers.map((data) => {
    return data._id;
  });

  console.log(trueAnswers);
  return (
    <ThemeProvider theme={theme}>
      <div className="widgetQuestionStudent">
        <div className="left">
          <span className="titleQuestion">{question?.title}</span>
          <span className="answersStudents">
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              // value={value}
            >
              {question.answers?.map((data, i) => {
                return (
                  <div
                    key={data._id + "q"}
                    className={
                      data.isCorrect +
                      "" +
                      resultAnswersIds.includes(data._id) +
                      "" +
                      trueAnswersIds.includes(data._id) +
                      "Answer"
                    }
                  >
                    <Radio
                      checked={resultAnswersIds.includes(data._id)}
                      value={data.value}
                      name="radio"
                      inputProps={{ "aria-label": "answer3" }}
                      disabled
                    />
                    {data.value}
                  </div>
                );
              })}
            </RadioGroup>
          </span>
        </div>
        <div className="right">
          <div className="percentage positive"></div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ResultQuestion;

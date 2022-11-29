import "./quiz_widget.scss";
import InsightsIcon from "@mui/icons-material/Insights";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import QuizIcon from "@mui/icons-material/Quiz";
const QuizWidget = ({ quiz }) => {
  const navigate = useNavigate();
  console.log(quiz);

  return (
    <div className="quizWidget">
      <div className="left">
        <span className="quizTitle">{quiz?.title}</span>
        <span className="quizDesc">
          {/* Starts at: &nbsp;{quiz.startTime.slice(11, 16)} */}
        </span>
        <span className="quizDesc">
          {/* Ends at: &nbsp;&nbsp;&nbsp;{quiz.endTime.slice(11, 16)} */}
        </span>
        <span className="startButton">
          <Button
            variant="contained"
            onClick={() => {
              navigate(`/allQuizzes/${quiz._id}`);
            }}
          >
            View results
          </Button>
        </span>
        {/* <Link className="link" to={`/quiz/${quiz._id}`}>
          Go to quiz
        </Link> */}
      </div>
      <div className="right">
        <div className="percentage positive">
          <QuizIcon />
        </div>
      </div>
    </div>
  );
};

export default QuizWidget;

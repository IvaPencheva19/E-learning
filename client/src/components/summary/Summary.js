import "./summary.css";
import "react-circular-progressbar/dist/styles.css";

import InsightsIcon from "@mui/icons-material/Insights";
import { CircularProgressbar } from "react-circular-progressbar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Summary = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <div className="summaryContainer">
                <div className="titleContainer">
                    <span className="empty"></span>
                    <h1 className="title">Summary</h1>
                    <InsightsIcon fontSize="small" />
                </div>

                <div className="infoContainer">

                    {user.role == 'Student' ?
                        <>
                            <div className="featuredChart">
                                <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
                            </div>
                            <p className="infoTitleSt">Average quizzes result</p>
                            <p className="amount">7</p>
                            <p className="infoTitleSt">Pending quizzes</p>
                        </>
                        : <>
                            <span className="infoTitle">Courses</span>{" "}
                            <span className="amount">7</span>
                            <span className="infoTitle">Topics</span>{" "}
                            <span className="amount">30</span>
                            <span className="infoTitle">Students</span>{" "}
                            <span className="amount">20</span>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default Summary;
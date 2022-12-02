import "./allCourses.css";
import "react-circular-progressbar/dist/styles.css";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SubjectIcon from '@mui/icons-material/Subject';

const AllCourses = () => {
    return (
        <>
            <div className="allCoursesContainer">

                <div className="titleContainer">
                    <span className="empty"></span>
                    <h1 className="title">Your courses</h1>
                    <SubjectIcon fontSize="small" />
                </div>

                <div className="search">
                    <input className="searchInput" type="text" placeholder="Search..." />
                    <SearchOutlinedIcon className="iconSubject"/>
                </div>

                <div className="coursesContainer">

                </div>
            </div>
        </>
    );
}

export default AllCourses;
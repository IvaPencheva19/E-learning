import "./myCourses.css";
import "react-circular-progressbar/dist/styles.css";

import { useState, useEffect, useContext } from "react";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SubjectIcon from '@mui/icons-material/Subject';
import * as courseService from "../../services/courseService";
import { AuthContext } from "../../context/AuthContext";
import CourseItem from "./CourseItem";

const MyCourses = () => {
    const [courses, setCourses] = useState([]);
    const [displayedCourses, setDisplayedCourses] = useState([]);

    const { user } = useContext(AuthContext);
    const [search, setSearch] = useState('');

    useEffect(() => {
        courseService
            .getCourses(user._id, user.role)
            .then((result) => {
                setCourses((oldState) => [...result]);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const onChangeHandler = (e) => {
        setSearch((oldState) => e.target.value);
        setDisplayedCourses(() =>
            courses.filter(x => x.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }

    return (
        <>
            <div className="allCoursesContainer">

                <div className="titleContainer">
                    <span className="empty"></span>
                    <h1 className="title">Your courses</h1>
                    <SubjectIcon fontSize="small" />
                </div>

                <div className="search">
                    <input onChange={onChangeHandler} className="searchInput" type="text" placeholder="Search..." />
                    <SearchOutlinedIcon className="iconSubject" />
                </div>

                <div className="coursesContainer">
                    {displayedCourses.map((x) => <CourseItem key={x._id} item={x} />)}
                </div>
            </div>
        </>
    );
}

export default MyCourses;
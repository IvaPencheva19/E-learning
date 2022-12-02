import { useNavigate } from "react-router-dom";
import "./courseItem.css";


const CourseItem = ({
    item
}) => {

    const navigate = useNavigate();

    const onCourseClickHandler = () => {
        navigate(`/course/${item._id}`);
    }

    return (
        <>
            <div className="infoTitle courseItem" onClick={onCourseClickHandler}> {item.name}</div>
        </>
    );
}

export default CourseItem;
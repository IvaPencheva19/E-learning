import "./courseItem.css";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useNavigate } from "react-router-dom";


const CourseItem = ({
    item
}) => {

    const navigate = useNavigate();

    const onCourseClickHandler = () => {
        navigate(`/course/${item._id}`);
    }

    return (
        <>
            <div onClick={onCourseClickHandler} className="itemContainer">
                <div className="infoTitle courseItem"> {item.name}</div>
                <AutoStoriesIcon />
            </div>
        </>
    );
}

export default CourseItem;
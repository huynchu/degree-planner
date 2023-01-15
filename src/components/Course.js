import "./Course.css";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeCourse } from "../store";

function Course({ course }) {
  const dispatch = useDispatch();

  const handleDeleteCourse = () => {
    dispatch(removeCourse(course));
  };

  return (
    <div className="panel">
      <div>
        <p>
          {course.name} - <span>{course.credit}</span>
        </p>
      </div>
      <MdDeleteForever onClick={handleDeleteCourse} />
    </div>
  );
}

export default Course;

import "./SemesterList.css";
import { useSelector, useDispatch } from "react-redux";
import Course from "./Course";
import { useSortSemesters } from "../hooks/useSortSemesters";
import { removeSemester } from "../store";

function SemesterList() {
  const dispatch = useDispatch();
  const semesters = useSelector(({ semesters: { data } }) => data);
  const courses = useSelector(({ courses: { data } }) => data);

  const sortedSemesters = useSortSemesters([...semesters]);

  const handleDeleteSemester = (semester) => {
    dispatch(removeSemester(semester));
  };
  const renderedSemesters = sortedSemesters.map((semester) => {
    const filteredCourses = courses.filter((course) => {
      return course.sem === semester.name;
    });

    const renderedCourses = filteredCourses.map((course) => {
      return <Course key={course.id} course={course} />;
    });

    return (
      <div className="semester-panel" key={semester.id}>
        {semester.name}
        <div>
          <div>{renderedCourses}</div>
        </div>
        <button onClick={() => handleDeleteSemester(semester)}>
          Delete Semester
        </button>
      </div>
    );
  });

  return <div className="semesters">{renderedSemesters}</div>;
}

export default SemesterList;

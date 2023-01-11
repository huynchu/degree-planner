import "./SemesterList.css";
import { useSelector } from "react-redux";
import Course from "./Course";

function SemesterList() {
  const semesters = useSelector(({ semesters: { data } }) => data);
  const courses = useSelector(({ courses: { data } }) => data);

  const renderedSemesters = semesters.map((semester) => {
    const filteredCourses = courses.filter((course) => {
      return course.sem === semester.name;
    });

    console.log(filteredCourses);

    const renderedCourses = filteredCourses.map((course) => {
      return <Course key={course.id} course={course} />;
    });

    return (
      <div className="semester-panel">
        {semester.name}
        <div key={semester.id}>
          <div>{renderedCourses}</div>
        </div>
      </div>
    );
  });

  return <div className="semesters">{renderedSemesters}</div>;
}

export default SemesterList;

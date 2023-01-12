import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Form({ course }) {
  const dispatch = useDispatch();
  const semesters = useSelector(({ semesters: { data } }) => data);

  const handleSemesterSubmit = (event) => {
    event.preventDefault();
  };

  const handleCourseSubmit = (event) => {
    event.preventDefault();
  };

  const renderedOptions = semesters.map((semester) => {
    return <option value={semester.name}>{semester.name}</option>;
  });
  return (
    <div>
      <div>
        <h2>Add Semester</h2>
        <form onSubmit={handleSemesterSubmit}>
          <div>
            <input type="text"></input>
          </div>
        </form>
      </div>
      <div>
        <h2>Add Course</h2>
        <form onSubmit={handleCourseSubmit}>
          <div>
            <input type="text"></input>
          </div>
          <div>
            <input type="number"></input>
          </div>
          <div>
            <select>{renderedOptions}</select>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;

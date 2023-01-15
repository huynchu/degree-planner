import { useDispatch, useSelector } from "react-redux";
import { changeCcreditSelect, changeCnameInput } from "../store";

function CourseForm() {
  const dispatch = useDispatch();
  const semesters = useSelector(({ semesters: { data } }) => data);
  const { courseName, selectedCredit } = useSelector(
    ({ courseForm }) => courseForm
  );

  const handleCourseSubmit = (event) => {
    event.preventDefault();
  };

  const renderedSemesterOptions = semesters.map((semester) => {
    return (
      <option value={semester.name} key={semester.name}>
        {semester.name}
      </option>
    );
  });

  const handleCreditChange = (event) => {
    dispatch(changeCcreditSelect(parseInt(event.target.value)));
  };

  const handleCourseNameChange = (event) => {
    dispatch(changeCnameInput(event.target.value));
  };
  return (
    <div>
      <h2>Add Course</h2>
      <form onSubmit={handleCourseSubmit}>
        <div>
          <input
            type="text"
            placeholder={"Enter a course name..."}
            value={courseName}
            onChange={handleCourseNameChange}
          ></input>
        </div>
        <div>
          <input
            type="number"
            value={String(selectedCredit)}
            min={0}
            step={1}
            onChange={handleCreditChange}
          ></input>
        </div>
        <div>
          <select>{renderedSemesterOptions}</select>
        </div>
        <div>
          <button type="submit">Add Course</button>
        </div>
      </form>
    </div>
  );
}

export default CourseForm;

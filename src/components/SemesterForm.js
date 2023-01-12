import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function SemesterForm() {
  const dispatch = useDispatch();
  const { selectedYear, selectedSemType } = useSelector((state) => {
    return {
      selectedYear: state.semesterForm.selectedYear,
      selectedSemType: state.semesterForm.selectedSemType,
    };
  });

  const handleSemesterSubmit = (event) => {
    event.preventDefault();
  };

  console.log("HELLOOOOO", selectedYear, selectedSemType);
  return (
    <div>
      <div>
        <h2>Add Semester</h2>
        <form onSubmit={handleSemesterSubmit}>
          {selectedYear}
          {selectedSemType}
        </form>
      </div>
    </div>
  );
}

export default SemesterForm;

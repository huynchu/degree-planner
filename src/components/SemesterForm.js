import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import { changeSelectedYear, changeSemType, addSemester } from "../store";

function SemesterForm() {
  const dispatch = useDispatch();
  const { selectedYear, selectedSemType } = useSelector((state) => {
    return {
      selectedYear: state.semesterForm.selectedYear,
      selectedSemType: state.semesterForm.selectedSemType,
    };
  });

  const yearOptions = [
    { label: "Select a year...", value: "" },
    { label: "2028", value: "2028" },
    { label: "2027", value: "2027" },
    { label: "2026", value: "2026" },
    { label: "2025", value: "2025" },
    { label: "2024", value: "2024" },
    { label: "2023", value: "2023" },
    { label: "2022", value: "2022" },
    { label: "2021", value: "2021" },
    { label: "2020", value: "2020" },
    { label: "2019", value: "2019" },
    { label: "2018", value: "2018" },
    { label: "2017", value: "2017" },
    { label: "2016", value: "2016" },
    { label: "2015", value: "2015" },
  ];

  const semTypeOptions = [
    { label: "Select a semester...", value: "" },
    { label: "Fall", value: "Fall" },
    { label: "Spring", value: "Spring" },
    { label: "Arch Summer", value: "Arch Summer" },
    { label: "Fall Arch Away", value: "Fall Arch Away" },
    { label: "Spring Arch Away", value: "Spring Arch Away" },
  ];
  const handleSemesterSubmit = (event) => {
    event.preventDefault();
    if (!selectedYear || !selectedSemType) {
      alert("Please select a semester type and year.");
      return;
    }

    dispatch(
      addSemester({
        name: `${selectedSemType} ${selectedYear}`,
      })
    );
  };

  const handleYearChange = (value) => {
    dispatch(changeSelectedYear(value));
  };

  const handleSemTypeChange = (value) => {
    dispatch(changeSemType(value));
  };

  return (
    <div>
      <div>
        <h2>Add Semester</h2>
        <form onSubmit={handleSemesterSubmit}>
          <Dropdown
            options={semTypeOptions}
            onChange={handleSemTypeChange}
            value={selectedSemType}
          ></Dropdown>
          <Dropdown
            options={yearOptions}
            onChange={handleYearChange}
            value={selectedYear}
          />
          <button type="submit"> Add Semester </button>
        </form>
      </div>
    </div>
  );
}

export default SemesterForm;

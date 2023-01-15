import CourseForm from "./CourseForm";
import SemesterForm from "./SemesterForm";

function SideBar() {
  return (
    <div className="sidebar">
      <SemesterForm />
      <CourseForm />
    </div>
  );
}

export default SideBar;

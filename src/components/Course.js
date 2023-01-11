import { MdDeleteForever } from "react-icons/md";

function Course({ course }) {
  return (
    <div class="panel">
      <div>
        <p>{course.name}</p>
        <span>{course.credit}</span>
      </div>
      <MdDeleteForever />
    </div>
  );
}

export default Course;

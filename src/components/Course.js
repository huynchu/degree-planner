import { MdDeleteForever } from "react-icons/md";

function Course({ course }) {
  return (
    <div class="panel">
      <div>
        <p>
          {course.name} - <span>{course.credit}</span>
        </p>
      </div>
      <MdDeleteForever />
    </div>
  );
}

export default Course;

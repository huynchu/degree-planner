import { configureStore } from "@reduxjs/toolkit";
import { courseReducer, addCourse, removeCourse } from "./slices/courseSlice";
import { semestersReducer, addSemester } from "./slices/semestersSlice";
import {
  semesterFormReducer,
  changeSelectedYear,
  changeSemType,
} from "./slices/semesterFormSlice";

const store = configureStore({
  reducer: {
    courses: courseReducer,
    semesters: semestersReducer,
    semesterForm: semesterFormReducer,
  },
});

export {
  store,
  addCourse,
  removeCourse,
  addSemester,
  changeSelectedYear,
  changeSemType,
};

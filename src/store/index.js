import { configureStore } from "@reduxjs/toolkit";
import { courseReducer, addCourse, removeCourse } from "./slices/courseSlice";
import {
  semestersReducer,
  addSemester,
  removeSemester,
} from "./slices/semestersSlice";
import {
  semesterFormReducer,
  changeSelectedYear,
  changeSemType,
} from "./slices/semesterFormSlice";
import {
  courseFormReducer,
  changeCcreditSelect,
  changeCnameInput,
} from "./slices/courseFormSlice";

const store = configureStore({
  reducer: {
    courses: courseReducer,
    semesters: semestersReducer,
    semesterForm: semesterFormReducer,
    courseForm: courseFormReducer,
  },
});

export {
  store,
  // courseSlice actions
  addCourse,
  removeCourse,
  // semesterSlice actions
  addSemester,
  removeSemester,
  // semesterForm actions
  changeSelectedYear,
  changeSemType,
  // courserForm actions
  changeCcreditSelect,
  changeCnameInput,
};

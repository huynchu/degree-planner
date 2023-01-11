import { configureStore } from "@reduxjs/toolkit";
import { courseReducer, addCourse, removeCourse } from "./slices/courseSlice";
import { semestersReducer, addSemester } from "./slices/semestersSlice";

const store = configureStore({
  reducer: {
    courses: courseReducer,
    semesters: semestersReducer,
  },
});

export { store, addCourse, removeCourse, addSemester };

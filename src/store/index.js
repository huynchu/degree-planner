import { configureStore } from "@reduxjs/toolkit";
import { courseReducer, addCourse, removeCourse } from "./slices/courseSlice";

const store = configureStore({
  reducer: {
    coures: courseReducer,
  },
});

export { store, addCourse, removeCourse };

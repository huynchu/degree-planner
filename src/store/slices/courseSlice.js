import { createSlice, nanoid } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    data: [
      {
        id: nanoid(),
        name: "Computer Science I",
        code: 1100,
        dept: "CSCI",
        credit: 4,
        sem: "Fall 2020",
      },
    ],
  },
  reducers: {
    addCourse(state, action) {
      state.data.push({
        id: nanoid(),
        name: action.payload.name,
        code: action.payload.code,
        dept: action.payload.dept,
        credit: action.payload.credit,
        sem: action.payload.sem,
      });
    },

    deleteCourse(state, action) {
      const data = state.filter((course) => {
        return course.id !== action.payload.id;
      });

      state = data;
    },
  },
});

export const { addCourse, removeCourse } = courseSlice.actions;
export const courseReducer = courseSlice.reducer;

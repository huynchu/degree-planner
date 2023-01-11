import { createSlice, nanoid } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    data: [
      {
        name: "Computer Science I",
        code: 1100,
        dept: "CSCI",
        credit: 4,
        id: nanoid(),
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

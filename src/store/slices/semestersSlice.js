import { createSlice, nanoid } from "@reduxjs/toolkit";

const semestersSlice = createSlice({
  name: "semesters",
  initialState: {
    data: [
      {
        name: "Fall 2020",
        semType: "Fall",
        year: "2020",
        id: nanoid(),
      },
      {
        name: "Spring 2021",
        semType: "Spring",
        year: "2021",
        id: nanoid(),
      },
      {
        name: "Fall 2022",
        semType: "Fall",
        year: "2022",
        id: nanoid(),
      },
    ],
  },
  reducers: {
    addSemester(state, action) {
      state.data.push({
        name: action.payload.name,
        semType: action.payload.semType,
        year: action.payload.year,
        id: nanoid(),
      });
    },

    // deleteCourse(state, action) {
    //   const data = state.filter((course) => {
    //     return course.id !== action.payload.id;
    //   });

    //   state = data;
    // },
  },
});

export const { addSemester } = semestersSlice.actions;
export const semestersReducer = semestersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const courseFormSlice = createSlice({
  name: "courseForm",
  initialState: {
    courseName: "",
    selectedCredit: 4,
  },
  reducers: {
    changeCnameInput(state, action) {
      state.courseName = action.payload;
    },
    changeCcreditSelect(state, action) {
      state.selectedCredit = action.payload;
    },
  },
});

export const courseFormReducer = courseFormSlice.reducer;
export const { changeCcreditSelect, changeCnameInput } =
  courseFormSlice.actions;

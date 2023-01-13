import { createSlice } from "@reduxjs/toolkit";

const semesterFormSlice = createSlice({
  name: "form",
  initialState: {
    selectedYear: "",
    selectedSemType: "",
  },
  reducers: {
    changeSelectedYear(state, action) {
      state.selectedYear = action.payload;
    },
    changeSemType(state, action) {
      state.selectedSemType = action.payload;
    },
  },
});

export const semesterFormReducer = semesterFormSlice.reducer;
export const { changeSelectedYear, changeSemType } = semesterFormSlice.actions;

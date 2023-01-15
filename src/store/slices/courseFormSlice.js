import { createSlice } from "@reduxjs/toolkit";

const courseFormSlice = createSlice({
  name: "courseForm",
  initialState: {
    cnameInput: "",
    ccreditSelect: 4,
  },
  reducers: {
    changeCnameInput(state, action) {
      state.cnameInput = action.payload;
    },
    changeCcreditSelect(state, action) {
      state.ccreditSelect = action.payload;
    },
  },
});

export const courseFormReducer = courseFormSlice.reducer;
export const { changeCcreditSelect, changeCnameInput } =
  courseFormSlice.actions;

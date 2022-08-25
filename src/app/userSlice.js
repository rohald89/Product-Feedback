import { createSlice } from "@reduxjs/toolkit";
import { currentUser } from "../data";

const initialState = {
  currentUser,
};

export const feedbackSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = feedbackSlice.actions;

export default feedbackSlice.reducer;

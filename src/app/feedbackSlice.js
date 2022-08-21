import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedback: [],
  categories: ["All", "UI", "UX", "Enhancement", "Bug", "Feature"],
  activeCategory: "All",
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { changeCategory } = feedbackSlice.actions;

export default feedbackSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { feedback } from "../data";

const initialState = {
  suggestions: feedback.filter((item) => item.status === "suggestion"),
  inProgress: feedback.filter((item) => item.status !== "suggestion"),
  categories: ["All", "UI", "UX", "Enhancement", "Bug", "Feature"],
  activeCategory: "All",
  statuses: [
    { name: "Planned", color: "mainOrange" },
    { name: "In-Progress", color: "mainPurple" },
    { name: "Live", color: "lightBlue" },
  ],
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.activeCategory = action.payload;
      if (action.payload.toLowerCase() === "all") {
        state.suggestions = feedback.filter(
          (item) => item.status === "suggestion"
        );
      } else {
        state.suggestions = feedback.filter((feedback) => {
          return (
            feedback.status === "suggestion" &&
            feedback.category === action.payload.toLowerCase()
          );
        });
      }
    },
  },
});

export const { changeCategory } = feedbackSlice.actions;

export default feedbackSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { currentUser } from "../data";

const initialState = {
  currentUser,
};

export const feedbackSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUpvote: (state, action) => {
      const { id } = action.payload;
      if (!state.currentUser.upvotes.includes(id)) {
        state.currentUser.upvotes.push(id);
      } else {
        state.currentUser.upvotes.splice(
          state.currentUser.upvotes.indexOf(id),
          1
        );
      }
      console.log(state.currentUser.upvotes);
    },
  },
});

export const { addUpvote } = feedbackSlice.actions;

export default feedbackSlice.reducer;

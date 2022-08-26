import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { feedback } from "../data";

const initialState = {
  allFeedback: feedback,
  categories: ["UI", "UX", "Enhancement", "Bug", "Feature"],
  activeCategory: "all",
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    addFeedback: (state, action) => {
      const newFeedback = {
        id: uuidv4(),
        upvotes: 0,
        status: "suggestion",
        comments: [],
        ...action.payload,
      };
      state.allFeedback.push(newFeedback);
    },
    addComment: (state, action) => {
      const { id, comment, currentUser } = action.payload;
      const feedback = state.allFeedback.find((feedback) => feedback.id == id);

      const newComment = {
        id: uuidv4(),
        feedbackId: id,
        content: comment,
        user: currentUser,
        replies: [],
      };
      feedback.comments.push(newComment);
    },
    addReply: (state, action) => {
      const { id, commentId, reply, replyTo, currentUser } = action.payload;
      const newReply = {
        feedbackId: id,
        commentId,
        content: reply,
        replyingTo: replyTo,
        user: currentUser,
      };
      console.log(commentId);

      const feedback = state.allFeedback.find((feedback) => feedback.id == id);
      const comment = feedback.comments.find(
        (comment) => comment.id == commentId
      );
      console.log(comment, feedback);
      comment.replies = [...comment.replies, newReply];
    },
  },
});

export const { changeCategory, addFeedback, addComment, addReply } =
  feedbackSlice.actions;

export default feedbackSlice.reducer;

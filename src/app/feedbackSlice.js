import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { feedback } from "../data";

const initialState = {
  allFeedback: feedback,
  activeCategory: "all",
  sortBy: "Most Upvotes",
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    changeSort: (state, action) => {
      state.sortBy = action.payload;
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
    updateFeedback: (state, action) => {
      const { id, updatedFeedback } = action.payload;
      const existingFeedback = state.allFeedback.find(
        (feedback) => feedback.id == id
      );

      if (existingFeedback) {
        existingFeedback.title = updatedFeedback.title;
        existingFeedback.description = updatedFeedback.description;
        existingFeedback.category = updatedFeedback.category;
        existingFeedback.status = updatedFeedback.status;
      }
    },
    deleteFeedback: (state, action) => {
      console.log("deleteFeedback", action.payload);
      const id = action.payload;
      state.allFeedback = state.allFeedback.filter(
        (feedback) => feedback.id != id
      );
      console.log("state.allFeedback", state.allFeedback);
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

      const feedback = state.allFeedback.find((feedback) => feedback.id == id);
      const comment = feedback.comments.find(
        (comment) => comment.id == commentId
      );
      console.log(comment, feedback);
      comment.replies = [...comment.replies, newReply];
    },
    upvoteFeedback: (state, action) => {
      const { id, currentUser } = action.payload;
      const feedback = state.allFeedback.find((fb) => fb.id == id);
      if (!currentUser.upvotes.includes(id)) {
        feedback.upvotes++;
      } else {
        feedback.upvotes--;
      }
    },
  },
});

export const getSuggestions = (state) => {
  const feedback = state.feedback.allFeedback.filter((feedback) => {
    if (state.feedback.activeCategory.toLowerCase() === "all") {
      return feedback.status === "suggestion";
    } else if (
      feedback.category.toLowerCase() ===
        state.feedback.activeCategory.toLowerCase() &&
      feedback.status === "suggestion"
    ) {
      return feedback;
    }
  });
  switch (state.feedback.sortBy) {
    case "Most Upvotes":
      return feedback.sort((a, b) => b.upvotes - a.upvotes);
    case "Least Upvotes":
      return feedback.sort((a, b) => a.upvotes - b.upvotes);
    case "Most Comments":
      return feedback.sort((a, b) => b.comments.length - a.comments.length);
    case "Least Comments":
      return feedback.sort((a, b) => a.comments.length - b.comments.length);
    default:
      return feedback;
  }
};

export const {
  changeSort,
  changeCategory,
  upvoteFeedback,
  addFeedback,
  updateFeedback,
  deleteFeedback,
  addComment,
  addReply,
} = feedbackSlice.actions;

export default feedbackSlice.reducer;

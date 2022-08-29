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
    // getFilteredFeedback: (state) => {
    //   console.log(state);
    //   if (state.activeCategory.toLowerCase() == "all") {
    //     return state.allFeedback;
    //   } else {
    //     return state.allFeedback.filter(
    //       (feedback) => feedback.category == state.activeCategory
    //     );
    //   }
    // },
    sortFeedback: (state, action) => {
      const { sortBy } = action.payload;
      const suggestions = state.allFeedback.filter(
        (feedback) => feedback.status == "suggestion"
      );
      const filteredSuggestions = suggestions.filter(
        (feedback) => feedback.category == state.activeCategory
      );
      switch (sortBy) {
        case "Most Upvotes":
          return filteredSuggestions.sort((a, b) => a.upvotes - b.upvotes);
        case "Least Upvotes":
          return filteredSuggestions.sort((a, b) => b.upvotes - a.upvotes);
        case "Most Comments":
          return filteredSuggestions.sort(
            (a, b) => a.comments.length - b.comments.length
          );
        case "Least Comments":
          return filteredSuggestions.sort(
            (a, b) => b.comments.length - a.comments.length
          );
        default:
          return filteredSuggestions;
      }
    },
  },
});

export const {
  changeCategory,
  upvoteFeedback,
  //   getFilteredFeedback,
  addFeedback,
  updateFeedback,
  deleteFeedback,
  addComment,
  addReply,
} = feedbackSlice.actions;

export default feedbackSlice.reducer;

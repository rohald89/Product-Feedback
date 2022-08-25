import { combineReducers, configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "./feedbackSlice";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

// Used this blog as a reference on how to set up localStorage persistence:
// https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  feedback: feedbackReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);

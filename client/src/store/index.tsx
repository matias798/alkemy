import { configureStore } from "@reduxjs/toolkit";
import activity from "./slices/activity";

export const store = configureStore({
  reducer: {
    activity,
  },
});

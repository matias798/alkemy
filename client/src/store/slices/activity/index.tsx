import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const activitySlice = createSlice({
  name: "activity",
  initialState: {
    activities: [],
    loading: false,
    error: null,
  },
  reducers: {
    setActivities: (state: any, action: any) => {
      state.activities = action.payload;
    },

    setError: (state: any, action: any) => {
      state.error = action.payload;
    },
  },
});

export const { setActivities, setError } = activitySlice.actions;

export default activitySlice.reducer;

export const fetchActivities = () => (dispatch: any) => {
  axios
    .get("http://localhost:3000/activities")
    .then((res) => {
      dispatch(setActivities(res.data));
    })
    .catch((err) => {
      dispatch(setError(err));
    });
};

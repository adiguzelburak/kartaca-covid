import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  statistic: null,
};

export const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {
    getStatisticsRequest() { },
    setStatistics(state, action) { state.statistic = action.payload }
  },
});

export const covidActions = covidSlice.actions;

export default covidSlice.reducer;

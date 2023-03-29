import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  statistic: {},
};

export const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {
    getStatisticsRequest() { },
    setStatistics(state, action) { 
      state.statistic[action.payload.key] = action.payload.data 
    }
  },
});

export const covidActions = covidSlice.actions;

export default covidSlice.reducer;

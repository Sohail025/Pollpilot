import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../Variables/InstialPollData";
const PollDataSlice = createSlice({
  name: "PollData",
  initialState,
  reducers: {
    AddNewPollHandler: (state, action) => {
      if (action.payload) state.data = [...state.data, ...action.payload];
    },
    ValueHandler: (state, action) => {
      const targatPoll = state.data.filter(
        (item) => item.id === action.payload
      );
      const otherVlaue = state.data.filter(
        (item) => item.id !== action.payload
      );
      state.data = [];
    },
  },
});
export const { AddNewPollHandler } = PollDataSlice.actions;
export default PollDataSlice.reducer;

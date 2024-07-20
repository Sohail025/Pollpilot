import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../Variables/InstialPollData";
import {
  ValuesChangeHandler,
  AddPollHandler,
} from "../Operations/PollDataOperations";
const PollDataSlice = createSlice({
  name: "PollData",
  initialState,
  reducers: {
    AddNewPollHandler: AddPollHandler,
    ValuesHandler: ValuesChangeHandler,
  },
});
export const { AddNewPollHandler, ValuesHandler } = PollDataSlice.actions;
export default PollDataSlice.reducer;

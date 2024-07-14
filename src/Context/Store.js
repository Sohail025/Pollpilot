import { configureStore } from "@reduxjs/toolkit";
import PollDataReducer from "./Features/PollDataSlice";
import UserDataReducer from "./Features/UserDataSlice";

const store = configureStore({
  reducer: {
    pollData: PollDataReducer,
    userData: UserDataReducer,
  },
});

export default store;

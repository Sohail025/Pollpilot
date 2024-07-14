import { Password } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ides: [],
  myPollIdes: [],
  email: "",
  Password: "",
  useeEffectChecker: true,
};

const UserDataSlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    idTaker: (state, action) => {
      const newId = action.payload;
      state.ides.push(newId);
    },
    idRemover: (state, action) => {
      const id = action.payload;
      state.ides = state.ides.filter((item) => item !== id);
    },
    myPollIdHandler: (state, action) => {
      state.myPollIdes.push(action.payload);
    },
    useeEffectCheckerHandler: (state, action) => {
      state.useeEffectChecker = action.payload;
    },
  },
});
export const { idTaker, idRemover, myPollIdHandler, useeEffectCheckerHandler } =
  UserDataSlice.actions;
export default UserDataSlice.reducer;

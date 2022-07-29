import { createSlice } from "@reduxjs/toolkit";

export const initialLoginState = {
  showLogin: false,
};

const loginModalSlice = createSlice({
  name: "loginModal",
  initialState: initialLoginState,
  reducers: {
    loginToggle(state) {
      state.showLogin = !state.showLogin;
    },
  },
});

export const loginActions = loginModalSlice.actions;

export default loginModalSlice;

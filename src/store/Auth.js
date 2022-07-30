import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  token: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "loginAuth",
  initialState: initialAuthState,
  reducers: {
    setLogin(state, action) {
      state.token = action.payload;
      state.isLoggedIn = state.token ? true : false;
    },
    setLogout(state) {
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;

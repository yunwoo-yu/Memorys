import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  token: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "loginAuth",
  initialState: initialAuthState,
});

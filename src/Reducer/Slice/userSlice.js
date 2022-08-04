import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 비동기 action 정의
const userSignUpAction = createAction("user/userSignUp");

const initialState = {
  email: "",
  password: "",
  data: {},
  loggedStatus: false,
  loginToggle: false,
  returnSecureToken: true,
  error: null,
  loading: false,
};

export const userSignUpAndLogin = createAsyncThunk(
  userSignUpAction,
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAzWdv8N5eIaLBRsRyn72jCngr5AQPQs4k",
        data
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const userSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    loginModalToggle: (state) => ({
      ...state,
      loginToggle: !state.loginToggle,
    }),
  },
  extraReducers: {
    [userSignUpAndLogin.pending]: (state, action) => ({
      ...state,
    }),
    [userSignUpAndLogin.fulfilled]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    [userSignUpAndLogin.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
});

export const { loginModalToggle } = userSlice.actions;

export default userSlice;

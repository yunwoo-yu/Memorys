import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 비동기 action 정의
const userSignUpAction = createAction("user/userSignUp");
const userLoginAction = createAction("user/userLogin");

const tokenReload = localStorage.getItem("token");

const initialState = {
  email: "",
  password: "",
  token: tokenReload,
  data: {},
  loginToggle: false,
  returnSecureToken: true,
  error: null,
  loading: false,
};

export const userSignUp = createAsyncThunk(
  userSignUpAction,
  async (data, { rejectWithValue }) => {
    try {
      let url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAzWdv8N5eIaLBRsRyn72jCngr5AQPQs4k";

      const response = await axios.post(url, data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
export const userLogin = createAsyncThunk(
  userLoginAction,
  async (data, { rejectWithValue }) => {
    try {
      let url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAzWdv8N5eIaLBRsRyn72jCngr5AQPQs4k";

      const response = await axios.post(url, data);
      return response.data.idToken;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginModalToggle: (state) => ({
      ...state,
      loginToggle: !state.loginToggle,
    }),
    logout: (state) => ({
      ...state,
      token: localStorage.removeItem("token"),
    }),
  },
  extraReducers: {
    [userSignUp.pending]: (state, action) => ({
      ...state,
    }),
    [userSignUp.fulfilled]: (state, action) => ({
      ...state,
    }),
    [userSignUp.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [userLogin.pending]: (state, action) => ({
      ...state,
    }),
    [userLogin.fulfilled]: (state, action) => ({
      ...state,
      token: action.payload,
    }),
    [userLogin.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
});

export const { loginModalToggle, logout } = userSlice.actions;

export default userSlice;

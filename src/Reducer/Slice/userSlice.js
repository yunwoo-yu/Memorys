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

export const userSignUp = createAsyncThunk(
  userSignUpAction,
  async (data, { rejectWithValue }) => {
    try {
      let url;
      if (initialState.loginToggle) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAzWdv8N5eIaLBRsRyn72jCngr5AQPQs4k";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAzWdv8N5eIaLBRsRyn72jCngr5AQPQs4k";
      }
      const response = await axios.post(url, data);
      return response.data;
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
  },
  extraReducers: {
    [userSignUp.pending]: (state, action) => ({
      ...state,
    }),
    [userSignUp.fulfilled]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    [userSignUp.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
});

export const { loginModalToggle } = userSlice.actions;

export default userSlice;

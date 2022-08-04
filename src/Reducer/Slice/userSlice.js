import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 비동기 action 정의
const userSignUpAction = createAction("user/userSignUp");

const initialState = {
  email: "",
  password: "",
  loggedStatus: false,
  returnSecureToken: true,
  error: null,
  loading: false,
};

export const userSignUp = createAsyncThunk(userSignUpAction, async (data) => {
  const response = await axios.post(
    "ttps://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAzWdv8N5eIaLBRsRyn72jCngr5AQPQs4k",
    data
  );

  return response.data;
});

const userSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {},
  extraReducers: {
    [userSignUp.pending]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [userSignUp.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      email: action.payload,
      password: action.payload,
    }),
    [userSignUp.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
});

export default userSlice;

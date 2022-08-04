import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Reducer/Slice/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

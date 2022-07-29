import { configureStore } from "@reduxjs/toolkit";
import loginModalSlice from "./login";

const store = configureStore({
  reducer: {
    login: loginModalSlice.reducer,
  },
});

export default store;

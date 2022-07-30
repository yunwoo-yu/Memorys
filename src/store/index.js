import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth";
import loginModalSlice from "./modal";

const store = configureStore({
  reducer: {
    login: loginModalSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import errorMiddleware from "../middleware/errorMiddleware";
import userSlice from "../Reducer/Slice/userSlice";

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(errorMiddleware),
});

export default store;

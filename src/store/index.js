import { configureStore } from "@reduxjs/toolkit";
import errorMiddleware from "../middleware/errorMiddleware";
import recipeSlice from "../Reducer/Slice/RecipeSlice";
import userSlice from "../Reducer/Slice/userSlice";

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    recipe: recipeSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(errorMiddleware),
});

export default store;

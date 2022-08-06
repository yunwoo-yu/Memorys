import { createAsyncThunk, createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const recipesAction = createAction("recipes/randomRecipe");

const initialState = {
  data: [],
  error: null,
};

export const recipeThunk = createAsyncThunk(
  recipesAction,
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/random?apiKey=077376e33b6d4e028d91ac53455e7d7e&number=10"
      );
      console.log(response);
      return response.data.recipes;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: {
    [recipeThunk.pending]: (state) => ({
      ...state,
    }),
    [recipeThunk.fulfilled]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    [recipeThunk.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
});

export default recipeSlice;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { FetchRecipesPayload, RecipesState } from "features/recipes/typings";
import { getRecipes } from "api/recipes";

const initialState: RecipesState = {
  list: [],
  loading: false,
};

export const fetchRecipes = createAsyncThunk<FetchRecipesPayload>(
  "fetchRecipes",
  () => getRecipes()
);

const recipesSlice = createSlice({
  initialState,
  name: "recipes",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipes.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.data.recipes;
      });
  },
});

export default recipesSlice.reducer;

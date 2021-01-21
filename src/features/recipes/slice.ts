import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  FetchRecipeDetails,
  FetchRecipesDetailsPayload,
  FetchRecipesPayload,
  RecipesState,
} from "features/recipes/typings";
import { getRecipeDetails, getRecipes } from "api/recipes";

const initialState: RecipesState = {
  list: [],
  recipe: null,
  loading: false,
};

export const fetchRecipes = createAsyncThunk<FetchRecipesPayload>(
  "fetchRecipes",
  () => getRecipes()
);

export const fetchRecipeDetails = createAsyncThunk<
  FetchRecipesDetailsPayload,
  FetchRecipeDetails
>("fetchRecipeDetails", ({ recipeId }) => getRecipeDetails({ recipeId }));

const recipesSlice = createSlice({
  initialState,
  name: "recipes",
  reducers: {
    clearRecipe(state) {
      state.recipe = null;
    },
  },
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
        state.list = action.payload.recipes;
      })

      .addCase(fetchRecipeDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipeDetails.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchRecipeDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.recipe = action.payload.recipe;
      });
  },
});

export const { clearRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;

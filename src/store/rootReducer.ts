import { combineReducers } from "@reduxjs/toolkit";

import recipesReducer from "features/recipes/slice";

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

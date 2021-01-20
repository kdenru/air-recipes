import { getAxios } from "./axios";
import {
  FetchRecipeDetails,
  FetchRecipesPayload,
  FetchRecipesDetailsPayload,
} from "features/recipes/typings";

export const getRecipes = (): Promise<FetchRecipesPayload> =>
  getAxios().get("https://test.kode-t.ru/list.json");

export const getRecipeDetails = ({
  recipeId,
}: FetchRecipeDetails): Promise<FetchRecipesDetailsPayload> =>
  getAxios().get(`https://test.kode-t.ru/detail_${recipeId}.json`);

import { getAxios } from "./axios";
import { FetchRecipesPayload } from "features/recipes/typings";

export const getRecipes = (): Promise<FetchRecipesPayload> =>
  getAxios().get("https://test.kode-t.ru/list.json");

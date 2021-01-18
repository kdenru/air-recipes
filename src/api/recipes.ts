import axios from "axios";
import { FetchRecipesPayload } from "features/recipes/typings";

export const getRecipes = (): Promise<FetchRecipesPayload> =>
  axios.get("https://test.kode-t.ru/list.json");

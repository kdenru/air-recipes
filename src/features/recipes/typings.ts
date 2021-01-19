export type RecipesState = {
  list: Recipe[];
  loading: boolean;
};

export type Recipe = {
  id: number;
  title: string;
  cuisine: Cuisine;
  cookTime: number;
  thumbnail: string;
  caloricity: number;
  description: string;
};

export type Cuisine = {
  id: number;
  title: string;
};

export type FetchRecipesPayload = {
  recipes: Recipe[];
};

export type RecipesState = {
  list: Recipe[];
  loading: boolean;
  recipe: RecipeDetails | null;
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

export type RecipeDetails = Recipe & {
  images: string[];
  difficulty: string;
  ingredients: string[];
  instructions: string[];
};

export type Cuisine = {
  id: number;
  title: string;
};

export type FetchRecipeDetails = {
  recipeId: number;
};

export type FetchRecipesPayload = {
  recipes: Recipe[];
};

export type FetchRecipesDetailsPayload = {
  recipe: RecipeDetails;
};

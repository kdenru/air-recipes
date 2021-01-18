import * as React from "react";
import { useSelector } from "react-redux";

import { RootState } from "store/rootReducer";
import { Recipe } from "features/recipes/typings";

interface Props {
  query: string;
}

const RecipesList: React.FunctionComponent<Props> = ({ query }: Props) => {
  const { list } = useSelector((state: RootState) => state.recipes);

  const recipes = list.filter((recipe: Recipe) =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      {recipes.map((recipe: Recipe) => (
        <p key={recipe.id}>{recipe.title}</p>
      ))}
    </div>
  );
};

export default RecipesList;

import * as React from "react";
import { useSelector } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";

import RecipeCard from "components/recipeCard";

import { RootState } from "store/rootReducer";
import { Recipe } from "features/recipes/typings";

interface Props {
  query: string;
}

const useStyles = makeStyles({
  grid: {
    padding: "32px 98px",
  },
});

const RecipesList: React.FunctionComponent<Props> = ({ query }: Props) => {
  const styles = useStyles();
  const { list } = useSelector((state: RootState) => state.recipes);

  const recipes = list.filter((recipe: Recipe) =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Grid container justify="space-between" className={styles.grid}>
      {recipes.map((recipe: Recipe) => (
        <Grid item key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipesList;

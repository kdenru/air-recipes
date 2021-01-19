import * as React from "react";
import { useSelector } from "react-redux";
import { Box, Grid, makeStyles } from "@material-ui/core";

import RecipeCard from "components/recipeCard";

import { RootState } from "store/rootReducer";
import { Recipe } from "features/recipes/typings";
import { Filter } from "components/typings";

interface Props {
  filter: Filter;
}

const useStyles = makeStyles({
  grid: {
    gridRowGap: 24,
    display: "grid",
    gridColumnGap: 20,
    padding: "32px 98px",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});

const RecipesList: React.FunctionComponent<Props> = ({ filter }: Props) => {
  const styles = useStyles();
  const { list } = useSelector((state: RootState) => state.recipes);

  const recipes = list.filter(
    (recipe: Recipe) =>
      recipe.title.toLowerCase().includes(filter.query.toLowerCase()) &&
      filter.cuisines.includes(recipe.cuisine.id) &&
      filter.range[0] <= recipe.caloricity &&
      recipe.caloricity <= filter.range[1]
  );

  return (
    <Box className={styles.grid}>
      {recipes.map((recipe: Recipe) => (
        <Grid item key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </Grid>
      ))}
    </Box>
  );
};

export default RecipesList;

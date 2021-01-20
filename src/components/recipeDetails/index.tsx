import * as React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Box, makeStyles, Typography } from "@material-ui/core";

import { RootState } from "store/rootReducer";
import { fetchRecipeDetails } from "features/recipes/slice";

const useStyles = makeStyles({
  container: {
    padding: "32px 98px",
  },
});

const RecipeDetails: React.FunctionComponent = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { recipeId } = useParams<{ recipeId: string }>();
  const recipe = useSelector((state: RootState) => state.recipes.recipe);

  useEffect(() => {
    dispatch(fetchRecipeDetails({ recipeId: Number(recipeId) }));
  }, [recipeId]);

  return (
    <Box className={styles.container}>
      {recipe && <Typography>{recipe.title}</Typography>}
    </Box>
  );
};

export default RecipeDetails;

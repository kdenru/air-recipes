import * as React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Box, makeStyles, SvgIcon, Typography } from "@material-ui/core";

import { RootState } from "store/rootReducer";
import { fetchRecipeDetails } from "features/recipes/slice";

import DifficultyIcon from "assets/difficultyIcon.svg";
import TimeIcon from "assets/timeIcon.svg";
import CaloriesIcon from "assets/caloriesIcon.svg";
import CuisineIcon from "assets/cuisineIcon.svg";

import { formatTime } from "utils/index";
import Slider from "components/slider";

const useStyles = makeStyles({
  container: {
    display: "grid",
    padding: "32px 98px",
    gridColumnGap: 20,
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  title: {
    fontSize: 40,
    fontWeight: 800,
    marginBottom: 14,
    lineHeight: "48px",
    letterSpacing: "normal",
    fontFamily: "Gilroy ExtraBold",
  },
  subTitle: {
    fontSize: 24,
    fontWeight: 800,
    lineHeight: "28px",
    letterSpacing: "normal",
    fontFamily: "Gilroy ExtraBold",
  },
  text: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "normal",
  },
  list: {
    marginTop: 15,
    paddingLeft: 15,
    listStyleType: "disc",
  },
  listItem: {
    display: "flex",
    marginBottom: 12,
    listStyleType: "none",
    alignItems: "baseline",
    letterSpacing: "normal",
  },
  stepsList: {
    marginTop: 15,
    listStyleType: "none",
  },
  stepsListItem: {
    display: "flex",
    marginBottom: 12,
    letterSpacing: "normal",

    alignItems: "flex-start",
  },
  section: {
    marginTop: 33,
  },
  bullet: {
    marginRight: 5,
  },
  numberCircle: {
    marginTop: 4,
    height: 16,
    minWidth: 16,
    fontSize: 9,
    display: "flex",
    marginRight: 8,
    fontWeight: 700,
    color: "#000000",
    borderRadius: 16,
    alignItems: "center",
    background: "#ffffff",
    justifyContent: "center",
    border: "1px solid #dddddd",
    fontFamily: "Gilroy ExtraBold",
  },
  params: {
    marginTop: 16,
    display: "flex",
    alignItems: "center",
  },
  iconBox: {
    display: "flex",
    marginRight: 30,
    alignItems: "center",
  },
  iconTextCapitalized: {
    fontSize: 16,
    marginLeft: 10,
    lineHeight: "16px",
    letterSpacing: "normal",
    textTransform: "capitalize",
  },
  iconText: {
    fontSize: 16,
    marginLeft: 10,
    lineHeight: "16px",
    letterSpacing: "normal",
  },
});

const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case "easy": {
      return "#2FB65D";
    }
    case "medium": {
      return "#EB8A31";
    }
    case "hard": {
      return "#EB3C31";
    }
    default: {
      return "";
    }
  }
};

const RecipeDetails: React.FunctionComponent = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { recipeId } = useParams<{ recipeId: string }>();
  const recipe = useSelector((state: RootState) => state.recipes.recipe);

  useEffect(() => {
    dispatch(fetchRecipeDetails({ recipeId: Number(recipeId) }));
  }, [recipeId]);

  return (
    recipe && (
      <Box className={styles.container}>
        <Box>
          <Typography className={styles.title}>{recipe.title}</Typography>
          <Typography className={styles.text}>{recipe.description}</Typography>

          <Box className={styles.params}>
            <Box className={styles.iconBox}>
              <SvgIcon
                component={DifficultyIcon}
                style={{ color: getDifficultyColor(recipe.difficulty) }}
              />
              <Typography className={styles.iconTextCapitalized}>
                {recipe.difficulty}
              </Typography>
            </Box>

            <Box className={styles.iconBox}>
              <SvgIcon component={TimeIcon} />
              <Typography className={styles.iconText}>
                {formatTime(recipe.cookTime)}
              </Typography>
            </Box>

            <Box className={styles.iconBox}>
              <SvgIcon component={CaloriesIcon} />
              <Typography className={styles.iconText}>
                {`${recipe.caloricity} kCal`}
              </Typography>
            </Box>

            <Box className={styles.iconBox}>
              <SvgIcon component={CuisineIcon} />
              <Typography className={styles.iconTextCapitalized}>
                {recipe.cuisine.title}
              </Typography>
            </Box>
          </Box>

          <Box className={styles.section}>
            <Typography className={styles.subTitle}>Ingredients</Typography>
            <ul className={styles.stepsList}>
              {recipe.ingredients.map((ingredient: string) => (
                <li key={ingredient} className={styles.listItem}>
                  <span className={styles.bullet}>•</span>
                  <Typography className={styles.text}>{ingredient}</Typography>
                </li>
              ))}
            </ul>
          </Box>
          <Box className={styles.section}>
            <Typography className={styles.subTitle}>Instructions</Typography>
            <ul className={styles.stepsList}>
              {recipe.instructions.map((step: string, index) => (
                <li key={step} className={styles.stepsListItem}>
                  <span className={styles.numberCircle}>{index + 1}</span>
                  <Typography className={styles.text}>{step}</Typography>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
        <Box>
          <Slider images={recipe.images} />
        </Box>
      </Box>
    )
  );
};

export default RecipeDetails;

import * as React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Box,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { formatTime } from "utils/index";
import { Recipe } from "features/recipes/typings";

interface Props {
  recipe: Recipe;
}

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
  card: {
    width: 348,
    height: 384,
  },
  cardAction: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  content: {
    padding: 24,
  },
  topSection: {
    position: "relative",
  },
  chips: {
    right: 16,
    bottom: 16,
    position: "absolute",
  },
  chip: {
    marginLeft: 9,
    color: "#000000",
    background: "#ffffff",
    letterSpacing: "normal",
  },
  chipLabel: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 800,
    marginBottom: 8,
    lineHeight: "28px",
    letterSpacing: "normal",
    fontFamily: "Gilroy ExtraBold",
  },
  description: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
    overflow: "hidden",
    display: "-webkit-box",
    letterSpacing: "normal",
    "-webkit-line-clamp": 4,
    "-webkit-box-orient": "vertical",
  },
});

const RecipeCard: React.FunctionComponent<Props> = ({ recipe }: Props) => {
  const styles = useStyles();
  return (
    <Link className={styles.link} to={`/recipe/${recipe.id}`}>
      <Card className={styles.card} elevation={1}>
        <CardActionArea className={styles.cardAction}>
          <Box className={styles.topSection}>
            <CardMedia
              height="196"
              component="img"
              alt={recipe.title}
              title={recipe.title}
              image={recipe.thumbnail}
            />
            <Box className={styles.chips}>
              <Chip
                className={styles.chip}
                classes={{
                  label: styles.chipLabel,
                }}
                label={formatTime(recipe.cookTime)}
              />
              <Chip
                className={styles.chip}
                classes={{
                  label: styles.chipLabel,
                }}
                label={`${recipe.caloricity} kCal`}
              />
              <Chip
                className={styles.chip}
                classes={{
                  label: styles.chipLabel,
                }}
                label={recipe.cuisine.title}
              />
            </Box>
          </Box>
          <CardContent className={styles.content}>
            <Typography className={styles.title} component="h2">
              {recipe.title}
            </Typography>
            <Typography className={styles.description} component="p">
              {recipe.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default RecipeCard;

import * as React from "react";
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

import { Recipe } from "features/recipes/typings";

interface Props {
  recipe: Recipe;
}

const useStyles = makeStyles({
  card: {
    width: 348,
    height: 384,
    marginBottom: 24,
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
    marginLeft: 8,
    background: "#ffffff",
    color: "#000000",
  },
  title: {
    fontSize: 24,
    fontWeight: 800,
    marginBottom: 8,
    lineHeight: "28px",
  },
  description: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 4,
    "-webkit-box-orient": "vertical",
  },
});

const formatTime = (seconds: number): string => {
  const minutes = seconds / 60;
  return minutes >= 60 ? `${minutes / 60} hours` : `${minutes} min`;
};

const RecipeCard: React.FunctionComponent<Props> = ({ recipe }: Props) => {
  const styles = useStyles();
  return (
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
            <Chip className={styles.chip} label={formatTime(recipe.cookTime)} />
            <Chip className={styles.chip} label={`${recipe.caloricity} kCal`} />
            <Chip className={styles.chip} label={recipe.cuisine.title} />
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
  );
};

export default RecipeCard;

import * as React from "react";
import { useState } from "react";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    padding: 0,
  },
}));

import { Filter } from "components/typings";

import Header from "components/header";
import RecipesList from "components/recipesList";
import "./app.styl";

const App: React.FunctionComponent = () => {
  const styles = useStyles();

  const [filter, setFilter] = useState<Filter>({
    query: "",
    range: [100, 1200],
    cuisines: [1, 2, 3, 4, 5],
  });

  return (
    <Container maxWidth="lg" className={styles.container}>
      <Header filter={filter} setFilter={setFilter} />
      <RecipesList filter={filter} />
    </Container>
  );
};

export default App;

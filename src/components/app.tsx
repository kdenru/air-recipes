import * as React from "react";
import { useState } from "react";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    padding: 0,
  },
}));

import Header from "components/header";
import RecipesList from "components/recipesList";
import "./app.styl";

const App: React.FunctionComponent = () => {
  const styles = useStyles();
  const [query, setQuery] = useState("");

  return (
    <Container maxWidth="lg" className={styles.container}>
      <Header setQuery={setQuery} />
      <RecipesList query={query} />
    </Container>
  );
};

export default App;

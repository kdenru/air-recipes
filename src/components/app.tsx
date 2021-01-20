import * as React from "react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    padding: 0,
  },
}));

import { Filter } from "components/typings";

import Header from "components/header";
import RecipesList from "components/recipesList";
import RecipeDetails from "components/recipeDetails";
import { fetchRecipes } from "features/recipes/slice";

import "./app.styl";

const App: React.FunctionComponent = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  const [filter, setFilter] = useState<Filter>({
    query: "",
    range: [100, 1200],
    cuisines: [1, 2, 3, 4, 5],
  });

  return (
    <Router>
      <Container maxWidth="lg" className={styles.container}>
        <Header filter={filter} setFilter={setFilter} />
        <Switch>
          <Route path="/recipe/:recipeId">
            <RecipeDetails />
          </Route>
          <Route path="/">
            <RecipesList filter={filter} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

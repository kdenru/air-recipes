import * as React from "react";

import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    padding: 0,
  },
}));

import Header from "./header";
import "./app.styl";

const App: React.FunctionComponent = () => {
  const styles = useStyles();
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Header />
    </Container>
  );
};

export default App;

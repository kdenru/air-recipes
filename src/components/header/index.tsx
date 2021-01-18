import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";

import SearchIcon from "@material-ui/icons/Search";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Box, Typography, makeStyles, InputAdornment } from "@material-ui/core";

import bg from "assets/image.png";
import TextInput from "components/ui/textInput";
import { fetchRecipes } from "features/recipes/slice";

const useStyles = makeStyles(() => ({
  container: {
    height: 600,
    overflow: "auto",
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
  },
  content: {
    marginTop: 128,
    marginLeft: 98,
  },
  title: {
    fontSize: 64,
    fontWeight: 800,
    lineHeight: "80px",
  },
  tagline: {
    fontSize: 16,
    fontWeight: 400,
    color: "#82786A",
    lineHeight: "24px",
  },
  search: {
    marginTop: 32,
  },
  searchIcon: {
    color: "#a9a9a9",
  },
}));

interface Props {
  setQuery: (query: string) => void;
}

interface FormValues {
  query: string;
}

const Header: React.FunctionComponent<Props> = ({ setQuery }: Props) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return (
    <Box className={styles.container}>
      <Box className={styles.content}>
        <Typography className={styles.title} component="h1">
          Air recipes
        </Typography>
        <Typography className={styles.tagline}>
          Best Recipes for Best People
        </Typography>
        <Formik
          initialValues={{ query: "" }}
          onSubmit={(values: FormValues) => {
            setQuery(values.query);
          }}
        >
          {({ resetForm, submitCount }) => (
            <Form>
              <Field
                id="search"
                type="text"
                name="query"
                disabled={false}
                variant="outlined"
                placeholder="Search"
                component={TextInput}
                className={styles.search}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon className={styles.searchIcon} />
                    </InputAdornment>
                  ),
                  endAdornment: submitCount > 0 && (
                    <InputAdornment position="end">
                      <HighlightOffIcon onClick={() => resetForm()} />
                    </InputAdornment>
                  ),
                }}
              />
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Header;

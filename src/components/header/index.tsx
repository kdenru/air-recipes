import * as React from "react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";

import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import {
  Box,
  Typography,
  IconButton,
  makeStyles,
  InputAdornment,
} from "@material-ui/core";

import bg from "assets/image.png";
import TextInput from "components/textInput";
import FilterModal from "components/filterModal";

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
    letterSpacing: "normal",
    fontFamily: "Gilroy ExtraBold",
  },
  tagline: {
    fontSize: 16,
    fontWeight: 400,
    color: "#82786A",
    lineHeight: "24px",
    letterSpacing: "normal",
  },
  form: {
    marginTop: 32,
  },
  searchIcon: {
    color: "#a9a9a9",
  },
  filterButton: {
    width: 56,
    height: 56,
    marginLeft: 16,
    borderRadius: 56,
    border: "1px solid #dddddd",
    backgroundColor: "#ffffff",
  },
  input: {
    paddingLeft: 12,
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
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.content}>
        <Typography className={styles.title} component="h1">
          Air Recipes
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
            <Form className={styles.form}>
              <Field
                id="search"
                type="text"
                name="query"
                disabled={false}
                variant="outlined"
                placeholder="Search"
                component={TextInput}
                InputProps={{
                  classes: {
                    input: styles.input,
                  },
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
              <IconButton className={styles.filterButton} onClick={handleOpen}>
                <FilterListIcon />
              </IconButton>
              <FilterModal open={showModal} onClose={handleClose} />
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Header;

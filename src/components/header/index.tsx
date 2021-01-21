import * as React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Formik, Form, Field, FormikProps } from "formik";

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

import { Filter } from "components/typings";

const useStyles = makeStyles(() => ({
  container: {
    top: 0,
    width: 1280,
    position: "fixed",
    height: 600,
    zIndex: 1,
    overflow: "visibility",
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundColor: "#ffffff",
    transition: "all .5s ease",
    "& + div": {
      paddingTop: 728,
      transition: "all .5s ease",
    },
    // height: 292,
    // "& + div": {
    //   paddingTop: 420,
    // },
  },
  spacer: {
    width: "100%",
    height: 50,
    margin: "0 auto",
    backgroundColor: " #ffffff",
    position: "absolute",
    bottom: -50,
    zIndex: 1,
  },
  scrolledContainer: {
    height: 292,
    "& + div": {
      paddingTop: 420,
    },
  },
  content: {
    zIndex: 2,
    marginTop: 128,
    marginLeft: 98,
    position: "relative",
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
  clear: {
    cursor: "pointer",
  },
}));

interface Props {
  filter: Filter;
  setFilter: (values: Filter) => void;
}

const Header: React.FunctionComponent<Props> = ({
  filter,
  setFilter,
}: Props) => {
  const styles = useStyles();
  const history = useHistory();
  const [scrolled, setScrolled] = useState(false);
  const [showClear, setShowClear] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
  });

  const scrollListener = useCallback(() => {
    setScrolled(window.scrollY > 0);
  }, []);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Box
      className={`${styles.container} ${scrolled && styles.scrolledContainer}`}
    >
      <Box className={styles.content}>
        <Typography className={styles.title} component="h1">
          Air Recipes
        </Typography>
        <Typography className={styles.tagline}>
          Best Recipes for Best People
        </Typography>
        <Formik
          initialValues={filter}
          onSubmit={(values: Filter) => {
            if (values.query !== "") {
              setShowClear(true);
            }
            setFilter(values);
            history.push("/");
          }}
        >
          {(props: FormikProps<Filter>) => {
            return (
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
                    endAdornment: showClear && props.touched.query && (
                      <InputAdornment position="end">
                        <HighlightOffIcon
                          className={styles.clear}
                          onClick={() => {
                            props.setFieldValue("query", "");
                            setShowClear(false);
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                <IconButton
                  className={styles.filterButton}
                  onClick={handleOpen}
                >
                  <FilterListIcon />
                </IconButton>
                <FilterModal
                  formik={props}
                  open={showModal}
                  onClose={handleClose}
                />
              </Form>
            );
          }}
        </Formik>
      </Box>
      {scrolled && <Box className={styles.spacer} />}
    </Box>
  );
};

export default Header;

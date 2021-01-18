import * as React from "react";
import {
  Box,
  Typography,
  TextField,
  makeStyles,
  withStyles,
  InputAdornment,
  Icon,
} from "@material-ui/core";

import bg from "../../assets/image.png";

import SearchIcon from "@material-ui/icons/Search";

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

const TextInput = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      width: 276,

      "& fieldset": {
        borderRadius: 28,
        borderColor: "#dddddd",
        transition: "all 0.25s ease",
      },
      "&:hover fieldset": {
        borderColor: "#dddddd",
      },
      "&.Mui-focused fieldset": {
        borderWidth: 1,
        borderColor: "#a9a9a9",
      },
    },
  },
})(TextField);

const Header: React.FunctionComponent = () => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Box className={styles.content}>
        <Typography className={styles.title} component="h1">
          Air recipes
        </Typography>
        <Typography className={styles.tagline}>
          Best Recipes for Best People
        </Typography>
        <TextInput
          id="search"
          type="text"
          variant="outlined"
          placeholder="Search"
          className={styles.search}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon aria-label="toggle password visibility">
                  <SearchIcon className={styles.searchIcon} />
                </Icon>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;

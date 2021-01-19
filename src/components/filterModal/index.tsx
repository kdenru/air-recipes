import * as React from "react";
import { FormikProps } from "formik";

import Modal from "@material-ui/core/Modal";
import List from "@material-ui/core/List";
import Checkbox from "@material-ui/core/Checkbox";
import CloseIcon from "@material-ui/icons/Close";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

import {
  Box,
  Button,
  Slider,
  IconButton,
  Paper,
  makeStyles,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { Cuisine } from "features/recipes/typings";
import ApplyButton from "components/applyButton";
import { Filter } from "components/typings";

const useStyles = makeStyles(() => ({
  body: {
    top: 81,
    left: "50%",
    width: 440,
    height: 558,
    padding: 32,
    outline: "none",
    position: "absolute",
    transform: "translateX(-50%)",
    boxShadow:
      "0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: 24,
    fontWeight: 800,
    lineHeight: "28px",
    fontFamily: "Gilroy ExtraBold",
  },
  text: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
  },
  closeCross: {
    top: 5,
    right: 5,
    position: "absolute",
  },
  list: {
    marginTop: 9,
  },
  listItem: {
    height: 48,
  },
  listItemIcon: {
    minWidth: "unset",
  },
  checkbox: {
    color: "#82786A",
  },
  slider: {
    height: 0,
    marginTop: 50,
    color: "#82786A",
  },
  buttonBox: {
    marginTop: 60,
    display: "flex",
    justifyContent: "space-between",
  },
  clearButton: {
    height: 36,
    color: "#82786A",
    lineHeight: "16px",
    letterSpacing: 1.25,
    padding: "10px 15px",
  },
}));

const cuisines: Cuisine[] = [
  {
    id: 1,
    title: "Caribbean",
  },
  {
    id: 2,
    title: "Greek",
  },
  {
    id: 3,
    title: "French",
  },
  {
    id: 4,
    title: "Indian",
  },
  {
    id: 5,
    title: "Chinese",
  },
];

interface Props {
  open: boolean;
  onClose: () => void;
  formik: FormikProps<Filter>;
}

const FilterModal: React.FunctionComponent<Props> = ({
  open,
  onClose,
  formik: {
    values,
    touched,
    submitForm,
    initialValues,
    setFieldValue,
    setFieldTouched,
  },
}: Props) => {
  const styles = useStyles();

  const handleToggle = (value: number) => () => {
    const currentIndex = values.cuisines.indexOf(value);
    const newChecked = [...values.cuisines];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setFieldValue("cuisines", newChecked);
    setFieldTouched("cuisines", true);
  };

  const handleChange = (event: React.MouseEvent, newValue: number[]) => {
    setFieldValue("range", newValue);
    setFieldTouched("range", true);
  };

  const clearFilter = () => {
    setFieldTouched("range", false);
    setFieldValue("range", initialValues.range);

    setFieldTouched("cuisines", false);
    setFieldValue("cuisines", initialValues.cuisines);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      BackdropProps={{
        style: { background: "rgba(255,255,255, 0.8)" },
      }}
    >
      <Paper className={styles.body}>
        <IconButton onClick={onClose} className={styles.closeCross}>
          <CloseIcon />
        </IconButton>
        <Typography className={styles.title}>Filter</Typography>
        <List className={styles.list}>
          {cuisines.map((cuisine: Cuisine) => (
            <ListItem
              dense
              button
              divider
              disableGutters
              key={cuisine.id}
              className={styles.listItem}
              onClick={handleToggle(cuisine.id)}
            >
              <ListItemText
                id={cuisine.title}
                primary={cuisine.title}
                primaryTypographyProps={{
                  className: styles.text,
                }}
              />
              <ListItemIcon className={styles.listItemIcon}>
                <Checkbox
                  edge="end"
                  color="default"
                  className={styles.checkbox}
                  checked={values.cuisines.includes(cuisine.id)}
                />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
        <Slider
          min={100}
          max={1200}
          value={values.range}
          valueLabelDisplay="on"
          onChange={handleChange}
          className={styles.slider}
        />
        <Typography className={styles.text}>Calories, kCal</Typography>
        <Box className={styles.buttonBox}>
          {(touched.cuisines || touched.range) && (
            <Button
              color="default"
              variant="outlined"
              onClick={clearFilter}
              className={styles.clearButton}
            >
              Clear
            </Button>
          )}
          <ApplyButton
            color="default"
            onClick={() => {
              submitForm().then(() => onClose());
            }}
          >
            Show recipes
          </ApplyButton>
        </Box>
      </Paper>
    </Modal>
  );
};

export default FilterModal;

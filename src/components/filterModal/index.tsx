import * as React from "react";

import Modal from "@material-ui/core/Modal";
import List from "@material-ui/core/List";
import CloseIcon from "@material-ui/icons/Close";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
  Slider,
} from "@material-ui/core";

import { Cuisine } from "features/recipes/typings";
import ApplyButton from "components/applyButton";

interface Props {
  open: boolean;
  onClose: () => void;
}

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
    marginTop: 50,
    color: "#82786A",
  },
  buttonBox: {
    marginTop: 58,
    display: "flex",
    justifyContent: "space-between",
  },
  clearButton: {
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

const FilterModal: React.FunctionComponent<Props> = ({
  open,
  onClose,
}: Props) => {
  const styles = useStyles();
  const [calRange, setCalRange] = React.useState<number[]>([100, 1200]);
  const [checked, setChecked] = React.useState<number[]>([1, 2, 3, 4, 5]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleChange = (
    event: React.MouseEvent,
    newValue: number | number[]
  ) => {
    setCalRange(newValue as number[]);
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
                  checked={checked.indexOf(cuisine.id) !== -1}
                />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
        <Slider
          min={100}
          max={1200}
          value={calRange}
          valueLabelDisplay="on"
          onChange={handleChange}
          className={styles.slider}
        />
        <Typography className={styles.text}>Calories, kCal</Typography>
        <Box className={styles.buttonBox}>
          <Button
            variant="outlined"
            color="default"
            className={styles.clearButton}
          >
            Clear
          </Button>
          <ApplyButton color="default">Show recipes</ApplyButton>
        </Box>
      </Paper>
    </Modal>
  );
};

export default FilterModal;

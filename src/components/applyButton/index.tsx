import { Button, Theme, withStyles } from "@material-ui/core";

const ApplyButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText("#82786A"),
    backgroundColor: "#82786A",
    "&:hover": {
      backgroundColor: "#82786A",
    },
    letterSpacing: 1.25,
    padding: "10px 15px",
    marginLeft: "auto",
    height: 36,
  },
}))(Button);

export default ApplyButton;

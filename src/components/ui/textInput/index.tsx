import { withStyles } from "@material-ui/core";
import { TextField } from "formik-material-ui";

const TextInput = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      width: 276,
      borderRadius: 28,
      backgroundColor: "#ffffff",
      "& fieldset": {
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

export default TextInput;

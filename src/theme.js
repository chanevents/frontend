import { createTheme } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: "#e91e63",
    },
  },
  typography: {
    fontFamily: "Inter",
  },
});
export default theme;

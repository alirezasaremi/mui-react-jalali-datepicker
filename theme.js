import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#0e172a",
      main: "#14213D",
      light: "#434d63"
    },
    error: {
      light: "#ed4b82",
      main: "#e91e63",
      dark: "#a31545"
    },
    success: {
      light: "#35b77b",
      main: "#03a55a",
      dark: "#02733e"
    },
    background: {
      default: "#e5e5e5"
    }
  },
  typography: {
    fontFamily: ["Vazirmatn", "sans-serif"].join(","),
    h1: {
      fontSize: "22px"
    }
  }
});

export default theme;

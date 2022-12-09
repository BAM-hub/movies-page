import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#334756",
      main: "#fdfdff",
      dark: "#082032",
      contrastText: "#fff",
    },
    secondary: {
      // light: "#46C2CB",
      main: "#46C2CB",
      // dark: "#ba000d",
      // contrastText: "#000",
    },
    warning: {
      main: "#FF4C29",
    },
  },
});

export default theme;

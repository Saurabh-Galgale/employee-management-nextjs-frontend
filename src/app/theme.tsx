import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F3F7F9",
    },
    secondary: {
      main: "#D0DCE1",
      dark: "#3E5A69",
    },
    text: {
      primary: "#263C48",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#3E5A69",
          "&:hover": {
            backgroundColor: "#2e4653",
          },
        },
      },
    },
  },
});

export default theme;

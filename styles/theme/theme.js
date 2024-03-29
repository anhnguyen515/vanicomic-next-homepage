import {
  blue,
  blueGrey,
  deepOrange,
  green,
  grey,
  indigo,
  orange,
  pink,
  purple,
  red,
  teal,
} from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "3rem",
        },
      },
    },
  },

  palette: {
    mode: "light",
    primary: {
      light: red[400],
      main: red[500],
      dark: red[700],
    },

    secondary: {
      light: indigo[400],
      main: indigo[500],
      dark: indigo[700],
    },

    sub: {
      light: blueGrey[50],
      main: "#222731",
      dark: "#1F212D",
    },

    notification: {
      light: "#ba68c8",
      main: "#9c27b0",
      dark: "#7b1fa2",
      contrastText: "#fff",
    },

    like: {
      main: blue[500],
    },

    favorite: {
      main: pink[500],
    },

    happy: {
      main: orange[500],
    },

    sad: {
      main: teal["A700"],
    },

    text: {
      light: grey[100],
      main: grey[500],
      dark: grey[600],
    },

    success: {
      main: green["A700"],
      // contrastText: "#fff",
    },

    background: {
      paper: "#fff",
      default: "#fff",
    },
  },

  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 480, //default: 600
  //     md: 600, //default: 900
  //     lg: 960, //default: 1200
  //     xl: 1280, //default: 1536
  //   },
  // },
});

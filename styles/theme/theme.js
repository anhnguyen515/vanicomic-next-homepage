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
  palette: {
    mode: "light",
    primary: {
      light: indigo[400],
      main: indigo[500],
      dark: indigo[700],
    },

    secondary: {
      light: blueGrey[200],
      main: "#222731",
      dark: "#1F212D",
    },

    form: {
      light: indigo[50],
      main: indigo[500],
      dark: indigo[700],
      contrastText: "#fff",
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
      light: grey[50],
      main: grey[500],
      dark: grey[600],
    },

    success: {
      main: green["A700"],
      // contrastText: "#fff",
    },

    background: {
      paper: "#fff",
      default: grey[100],
    },
  },

  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 480, //default: 600
  //     md: 600, //default: 960
  //     lg: 960, //default: 1280
  //     xl: 1280, //default: 1920
  //   },
  // },
});
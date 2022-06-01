import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import createEmotionCache from "utility/createEmotionCache";
import { lightTheme } from "styles/theme/theme";
import "../styles/globals.css";
import MainLayout from "../components/Layout/MainLayout";

{
  /* react-slick carousel */
}
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

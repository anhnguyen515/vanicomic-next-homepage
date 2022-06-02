import { Box } from "@mui/material";
import Footer from "components/common/Footer";
import Navbar from "components/common/Navbar/Navbar";
import ScrollToTop from "components/common/ScrollToTop";
import React from "react";

export default function MainLayout({ children }) {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Box sx={{ flex: 1 }}>{children}</Box>
        <Footer />
      </Box>
    </>
  );
}

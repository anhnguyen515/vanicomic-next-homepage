import { Box, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import React from "react";

export default function SubCategoryTitle({ children }) {
  return (
    <>
      <Typography
        variant="h5"
        fontWeight={500}
        gutterBottom
        sx={{
          display: "inline-block",
          backgroundColor: "secondary.main",
          borderRadius: 1,
          color: "text.light",
          pl: 2,
          pr: 2,
          m: 2,
          mt: 0,
          height: "2.6rem",
          lineHeight: "2.6rem",
          width: "auto",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: -10,
            right: -10,
            bottom: 0,
            backgroundColor: "secondary.dark",
            borderRadius: 1,
            transform: "skewX(-30deg)",
            zIndex: -1,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: -10,
            right: -10,
            bottom: 0,
            backgroundColor: "secondary.dark",
            borderRadius: 1,
            transform: "skewX(30deg)",
            zIndex: -1,
          },
        }}
      >
        {children}
      </Typography>
    </>
  );
}

import Typography from "@mui/material/Typography";
import React from "react";

export default function CategoryTitle({ children }) {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={500}
        gutterBottom
        sx={{
          display: "inline-block",
          backgroundColor: "primary.main",
          borderRadius: 1,
          color: "text.light",
          pl: 2,
          pr: 2,
          ml: 2,
          mr: 2,
          height: "2.8rem",
          lineHeight: "2.8rem",
          width: "auto",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            left: 10,
            right: -10,
            bottom: -10,
            height: "2.8rem",
            backgroundColor: "primary.dark",
            borderRadius: 1,
            transform: "skewX(-15deg)",
            zIndex: -1,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            left: -10,
            right: 10,
            bottom: -10,
            height: "2.8rem",
            backgroundColor: "primary.dark",
            borderRadius: 1,
            transform: "skewX(15deg)",
            zIndex: -1,
          },
        }}
      >
        {children}
      </Typography>
    </>
  );
}

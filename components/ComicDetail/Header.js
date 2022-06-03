import { Box, Typography } from "@mui/material";
import React from "react";

export default function Header({ comic }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography variant="h6">{comic.genre.name}</Typography>
        <Typography variant="h4">{comic.name}</Typography>
        <Typography fontSize="1.2rem">{comic.user.name}</Typography>
      </Box>
    </>
  );
}

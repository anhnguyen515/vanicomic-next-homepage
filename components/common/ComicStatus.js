import { Box, Typography } from "@mui/material";
import React from "react";
import { comicStatusColor, comicStatusIcon } from "utility/utils";

export default function ComicStatus({ children }) {
  return (
    <Box>
      <Typography
        sx={{
          width: "2rem",
          height: "2rem",
          backgroundColor: comicStatusColor(children),
          borderRadius: "50%",
          color: "text.light",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {comicStatusIcon(children)}
      </Typography>
    </Box>
  );
}

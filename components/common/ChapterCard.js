import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { dateFormat, numberFormat } from "utility/utils";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function ChapterCard({ chapter }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          borderBottom: 1,
          borderColor: "text.light",
          "&:first-of-type": {
            borderTop: 1,
            borderColor: "text.light",
          },
        }}
      >
        <Avatar variant="square" sx={{ width: "5rem", height: "5rem" }} />
        <Typography variant="h6">Chương {chapter.chap_num}</Typography>
        <Typography sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <FavoriteBorderIcon fontSize="small" />
          {numberFormat(chapter.likes)}
        </Typography>
        <Typography ml="auto" color="text.main">
          {dateFormat(chapter.created_at)}
        </Typography>
      </Box>
    </>
  );
}

import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { dateFormat, numberFormat } from "utility/utils";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";

export default function ChapterCard({ chapter }) {
  return (
    <Link
      href={`/comic/${chapter.comic.id}/chapter/${chapter.chap_num}`}
      passHref
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          borderBottom: 1,
          borderColor: "text.light",
          cursor: "pointer",
          pl: 1,
          pr: 1,
          "&:first-of-type": {
            borderTop: 1,
            borderColor: "text.light",
          },
          "&:hover": {
            backgroundColor: "text.light",
          },
        }}
      >
        <Avatar variant="square" sx={{ width: "5rem", height: "5rem" }} />
        <Typography variant="h6">{chapter.title}</Typography>
        <Typography sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <FavoriteBorderIcon fontSize="small" />
          {numberFormat(chapter.likes)}
        </Typography>
        <Typography ml="auto" color="text.main">
          {dateFormat(chapter.created_at)}
        </Typography>
        <Typography># {chapter.chap_num}</Typography>
      </Box>
    </Link>
  );
}

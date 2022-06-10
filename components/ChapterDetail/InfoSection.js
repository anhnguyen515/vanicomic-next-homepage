import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Avatar, Box, Chip, Typography } from "@mui/material";
import React from "react";
import { dateFormat, numberFormat } from "utility/utils";

export default function InfoSection({ chapter }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          borderTop: 1,
          borderBottom: 1,
          pr: 1,
          borderColor: "text.light",
        }}
      >
        <Avatar variant="square" sx={{ width: "8rem", height: "8rem" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography variant="h6">{chapter.title}</Typography>
          <Typography>{chapter.content.length} trang truyện</Typography>
        </Box>
        <Chip
          icon={<FavoriteBorderIcon />}
          label={numberFormat(chapter.likes)}
        />
        <Typography ml="auto" color="text.main">
          {dateFormat(chapter.created_at)}
        </Typography>
        <Typography># {chapter.chap_num}</Typography>
      </Box>
    </>
  );
}

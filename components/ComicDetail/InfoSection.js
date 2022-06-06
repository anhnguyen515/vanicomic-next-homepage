import { Box, Button, Typography } from "@mui/material";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GroupIcon from "@mui/icons-material/Group";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GradeIcon from "@mui/icons-material/Grade";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { getWeekday, numberFormat } from "utility/utils";

export default function InfoSection({ comic }) {
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: 0,
            md: 3,
          },
          "&>*": {
            mb: 2,
          },
        }}
      >
        {/* view các kiểu */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            "&>*": { flexBasis: "48%", fontWeight: 500 },
          }}
        >
          <Typography sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <VisibilityIcon color="primary" /> {numberFormat(comic.views)}
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <GroupIcon color="primary" /> {numberFormat(comic.followers)}
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <FavoriteIcon color="primary" /> {numberFormat(comic.likes)}
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <GradeIcon color="primary" /> {numberFormat(comic.rate_point)}
          </Typography>
        </Box>
        {/* ngày ra chương mới mỗi tuần */}
        <Box>
          <Typography fontWeight={500} fontSize="1.5rem" lineHeight="1.5rem">
            {getWeekday(comic.comic_weekday)} hàng tuần
          </Typography>
        </Box>
        {/* tóm tắt truyện */}
        <Box>
          <Typography fontWeight={400}>{comic.summary}</Typography>
        </Box>
        {/* đọc từ đầu */}
        <Box>
          <Button
            fullWidth
            variant="outlined"
            size="large"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Đọc từ đầu
          </Button>
        </Box>
      </Box>
    </>
  );
}

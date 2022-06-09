import FavoriteIcon from "@mui/icons-material/Favorite";
import GradeIcon from "@mui/icons-material/Grade";
import GroupIcon from "@mui/icons-material/Group";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Button, Typography } from "@mui/material";
import ComicStatus from "components/common/ComicStatus";
import React from "react";
import { getComicStatus, getWeekday, numberFormat } from "utility/utils";

export default function InfoSection({ comic }) {
  const today = new Date().getDay();

  return (
    <>
      <Box
        sx={{
          padding: {
            xs: 0,
            md: 3,
          },
          "&>*": {
            mb: 3,
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
        {comic.comic_status === "C" ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography fontWeight={500} fontSize="2rem" lineHeight="2rem">
              {getWeekday(comic.comic_weekday).text} hàng tuần
            </Typography>
            {comic.comic_status === "C" &&
              getWeekday(comic.comic_weekday).index === today && (
                <ComicStatus>{comic.comic_status}</ComicStatus>
              )}
          </Box>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography fontWeight={500} fontSize="2rem" lineHeight="2rem">
              {getComicStatus(comic.comic_status)}
            </Typography>
            <ComicStatus>{comic.comic_status}</ComicStatus>
          </Box>
        )}
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

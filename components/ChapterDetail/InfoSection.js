import {
  faFacebookF,
  faRedditAlien,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Chip, IconButton, Typography } from "@mui/material";
import React from "react";
import { getWeekday, numberFormat } from "utility/utils";

export default function InfoSection({ chapter, comic }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography fontWeight={500} fontSize="1.5rem" lineHeight="1.5rem">
          {getWeekday(comic.comic_weekday).text} hàng tuần
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Chip
            icon={<FavoriteBorderIcon fontSize="small" />}
            label={numberFormat(chapter.likes)}
          />
          <Chip
            icon={<BookmarkAddIcon fontSize="small" />}
            label="Theo dõi"
            color="secondary"
          />
        </Box>
        <Typography>
          Nếu bạn thích bộ truyện này, hãy chia sẻ nó để ủng hộ tác giả nhé! ^-^
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box>
            <IconButton
              sx={{
                color: "text.light",
                backgroundColor: "sub.main",
                "&:hover": {
                  backgroundColor: "#3C8FFF",
                },
              }}
            >
              <FontAwesomeIcon icon={faFacebookF} width={16} height={16} />
            </IconButton>
          </Box>
          <Box>
            <IconButton
              sx={{
                color: "text.light",
                backgroundColor: "sub.main",
                "&:hover": {
                  backgroundColor: "#1A8CD8",
                },
              }}
            >
              <FontAwesomeIcon icon={faTwitter} width={16} height={16} />
            </IconButton>
          </Box>
          <Box>
            <IconButton
              sx={{
                color: "text.light",
                backgroundColor: "sub.main",
                "&:hover": {
                  backgroundColor: "#FF4501",
                },
              }}
            >
              <FontAwesomeIcon icon={faRedditAlien} width={16} height={16} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}

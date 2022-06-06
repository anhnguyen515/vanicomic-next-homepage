import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Chip, Divider, Paper, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { getWeekday, numberFormat } from "utility/utils";
import TodayIcon from "@mui/icons-material/Today";
import PauseIcon from "@mui/icons-material/Pause";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import CheckIcon from "@mui/icons-material/Check";
import ComicStatus from "./ComicStatus";

export default function ComicSquareCard({ comic }) {
  const today = new Date().getDay();
  return (
    <>
      <Link href={`/truyen/${comic.id}`} passHref>
        <Paper
          sx={{
            cursor: "pointer",
            aspectRatio: "1",
            position: "relative",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              backgroundImage: `linear-gradient(to bottom, rgba(51, 51, 51, 0.7), rgba(51, 51, 51, 0.7)),url(${comic.cover})`,
              // backgroundImage: `url(${comic.cover})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: 1,
            }}
          >
            <Typography
              variant="h6"
              color="text.light"
              sx={{ lineHeight: 1.1 }}
              gutterBottom
            >
              {comic.name}
            </Typography>
            <Typography
              color="primary"
              fontSize="1.1rem"
              fontWeight={500}
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
              gutterBottom
            >
              <VisibilityIcon fontSize="small" /> {numberFormat(comic.views)}
            </Typography>
            {/* <Typography
              color="primary"
              fontSize="1.1rem"
              fontWeight={500}
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <FavoriteIcon fontSize="small" /> {numberFormat(comic.likes)}
            </Typography> */}
            {comic.comic_status === "C" &&
              getWeekday(comic.comic_weekday).index === today && (
                <ComicStatus>{comic.comic_status}</ComicStatus>
              )}
            {comic.comic_status === "F" && (
              <ComicStatus>{comic.comic_status}</ComicStatus>
            )}
            {comic.comic_status === "D" && (
              <ComicStatus>{comic.comic_status}</ComicStatus>
            )}
            <Chip
              label={comic.genre.name}
              size="small"
              sx={{
                mt: "auto",
                backgroundColor: comic.genre.main_color,
                color: "text.light",
              }}
            />
          </Paper>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: comic.genre.main_color,
              padding: 1,
              color: "text.light",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: "100%",
              opacity: 0,
              transition: "opacity 0.2s",
              "&:hover": {
                opacity: 1,
              },
            }}
          >
            <Typography
              variant="h6"
              color="text.light"
              sx={{
                lineHeight: 1.1,
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
              gutterBottom
            >
              {comic.name}
            </Typography>
            <Typography fontWeight={500}>{comic.user.name}</Typography>
            <Divider
              sx={{ backgroundColor: "text.light", width: 25, mt: 1, mb: 1 }}
            />
            <Typography
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: {
                  xs: 3,
                  xl: 4,
                },
                overflow: "hidden",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {comic.summary}
            </Typography>
            <Divider
              sx={{
                backgroundColor: "text.light",
                width: 25,
                mt: 1,
                mb: 1,
              }}
            />
            <Chip
              label={comic.genre.name}
              // variant="outlined"
              size="small"
              sx={{
                position: "absolute",
                bottom: 8,
                left: 8,
                mt: "auto",
                backgroundColor: "text.light",
                border: "none",
                color: comic.genre.main_color,
              }}
            />
          </Paper>
        </Paper>
      </Link>
    </>
  );
}

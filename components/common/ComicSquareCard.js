import { Box, Chip, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { numberFormat } from "utility/utils";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupIcon from "@mui/icons-material/Group";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";

export default function ComicSquareCard({ comic }) {
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
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <VisibilityIcon fontSize="small" /> {numberFormat(comic.views)}
            </Typography>
            <Typography
              color="primary"
              fontSize="1.1rem"
              fontWeight={500}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <FavoriteIcon fontSize="small" /> {numberFormat(comic.likes)}
            </Typography>
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
              overflow: "hidden",
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
            <Typography>{comic.summary}</Typography>
          </Paper>
        </Paper>
      </Link>
    </>
  );
}

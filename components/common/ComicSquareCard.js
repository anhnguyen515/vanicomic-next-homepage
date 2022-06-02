import { Box, Chip, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { numberFormat } from "utility/utils";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Link from "next/link";

export default function ComicSquareCard({ comic }) {
  return (
    <>
      <Link href={`/truyen/${comic.id}`} passHref>
        <Paper
          sx={{
            //   backgroundImage: `linear-gradient(to bottom, rgba(241, 241, 241, 0.7), rgba(241, 241, 241, 0.7)),url(${comic.cover})`,
            //   backgroundImage: `url(${comic.cover})`,
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            cursor: "pointer",
            aspectRatio: "1",
            position: "relative",
            "&>:last-child": {
              transition: "all 0.5s",
              display: "none",
            },
            "&:hover": {
              "&>:last-child": {
                display: "block",
              },
            },
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 2,
              pt: 1,
              pb: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ lineHeight: 1 }} gutterBottom>
              {comic.name}
            </Typography>
            <Typography
              color="primary"
              fontSize="1.1rem"
              fontWeight={500}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <ThumbUpIcon fontSize="small" /> {numberFormat(comic.likes)}
            </Typography>
            <Typography sx={{ mt: "auto", color: comic.genre.main_color }}>
              {comic.genre.name}
            </Typography>
          </Paper>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: comic.genre.main_color,
              color: "text.light",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              p: 2,
              pt: 1,
              pb: 1,
            }}
          >
            {/* <Typography variant="h6" sx={{ lineHeight: 1 }} gutterBottom>
            {comic.name}
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={500}
            sx={{ pb: 1, borderBottom: 1, borderColor: "text.light" }}
            gutterBottom
          >
            {comic.user.username}
          </Typography> */}
            <Typography
              sx={{
                overflow: "hidden",
                height: "100%",
              }}
            >
              {comic.summary}
            </Typography>
          </Paper>
        </Paper>
      </Link>
    </>
  );
}

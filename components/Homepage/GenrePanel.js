import { Grid, Typography } from "@mui/material";
import React from "react";
import ComicSquareCard from "../common/ComicSquareCard";

export default function GenrePanel({ value, genres, comics }) {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={500}
        textAlign="center"
        color={genres[value].main_color}
        gutterBottom
      >
        {genres[value].name}
      </Typography>
      <Grid container spacing={3}>
        {comics
          .filter((comic) => comic.genre.slug === genres[value].slug)
          .slice(0, 5)
          .map((comic) => (
            <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4}>
              <ComicSquareCard comic={comic} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}

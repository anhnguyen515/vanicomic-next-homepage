import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import ComicSquareCard from "../common/ComicSquareCard";

export default function GenrePanel({ value, genres, comics }) {
  const router = useRouter();
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
      <Typography fontStyle="italic" gutterBottom sx={{ p: 1 }}>
        {genres[value].info}
      </Typography>
      <Grid container spacing={3}>
        {comics
          .filter((comic) => comic.genre.slug === genres[value].slug)
          .slice(0, 10)
          .map((comic) => (
            <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4}>
              <ComicSquareCard comic={comic} />
            </Grid>
          ))}
      </Grid>
      <Box mt={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          endIcon={<ChevronRightIcon />}
          onClick={() => router.push(`/the-loai/${genres[value].id}/1`)}
          sx={{
            borderColor: genres[value].main_color,
            color: genres[value].main_color,
            "&:hover": {
              borderColor: genres[value].main_color,
              color: genres[value].main_color,
            },
          }}
        >
          Xem thêm
        </Button>
      </Box>
    </>
  );
}

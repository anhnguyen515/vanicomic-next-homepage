import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import ComicRectangleCard from "components/common/ComicRectangleCard";

export default function AlsoRead({ comics }) {
  return (
    <>
      <Box mt={3} mb={3}>
        <Typography variant="h5" gutterBottom>
          Có thể bạn cũng thích
        </Typography>
        <Grid container spacing={2}>
          {comics.slice(0, 3).map((comic) => (
            <Grid key={comic.id} item xs={12} md={4}>
              <ComicRectangleCard comic={comic} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

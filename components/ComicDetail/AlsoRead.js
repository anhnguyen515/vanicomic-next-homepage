import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import ComicRectangleCard from "components/common/ComicRectangleCard";
import SubCategoryTitle from "components/common/SubCategoryTitle";

export default function AlsoRead({ comics }) {
  return (
    <>
      <Box mt={3} mb={3}>
        <SubCategoryTitle>Có thể bạn cũng thích</SubCategoryTitle>
        <Box>
          <Grid container spacing={2}>
            {comics.slice(0, 3).map((comic) => (
              <Grid key={comic.id} item xs={12} md={4}>
                <ComicRectangleCard comic={comic} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

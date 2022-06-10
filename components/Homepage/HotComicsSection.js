import { Grid } from "@mui/material";
import React from "react";
import ComicRectangleCard from "components/common/ComicRectangleCard";

export default function HotComicsSection({ comics }) {
  return (
    <>
      <Grid container spacing={2}>
        {comics.slice(0, 5).map((comic) => (
          <Grid key={comic.id} item xs={12}>
            <ComicRectangleCard comic={comic} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

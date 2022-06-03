import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function ComicRectangleCard({ comic }) {
  return (
    <Card sx={{ display: "flex", gap: 2 }}>
      <CardMedia
        component="img"
        sx={{ aspectRatio: "1", width: "7rem" }}
        image={comic.picture}
        alt={`ảnh bìa của ${comic.name}`}
      />
      <Box sx={{ padding: 1 }}>
        <Typography variant="subtitle1" color={comic.genre.main_color}>
          {comic.genre.name}
        </Typography>
        <Typography variant="h6">{comic.name}</Typography>
        <Typography variant="body1">{comic.user.username}</Typography>
      </Box>
    </Card>
  );
}

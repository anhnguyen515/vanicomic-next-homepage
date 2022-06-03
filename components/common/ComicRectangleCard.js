import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";
import { numberFormat } from "utility/utils";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function ComicRectangleCard({ comic }) {
  return (
    <>
      <Link href={`/truyen/${comic.id}`} passHref>
        <Card sx={{ display: "flex", gap: 2, cursor: "pointer" }}>
          <CardMedia
            component="img"
            sx={{ aspectRatio: "1", width: "10rem" }}
            image={comic.picture}
            alt={`ảnh bìa của ${comic.name}`}
          />
          <Box sx={{ padding: 1, display: "flex", flexDirection: "column" }}>
            <Typography variant="subtitle1" color={comic.genre.main_color}>
              {comic.genre.name}
            </Typography>
            <Typography variant="h6">{comic.name}</Typography>
            <Typography variant="body1">{comic.user.name}</Typography>
            <Typography
              fontWeight={500}
              color="primary"
              mt="auto"
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <VisibilityIcon /> {numberFormat(comic.views)}
            </Typography>
          </Box>
        </Card>
      </Link>
    </>
  );
}

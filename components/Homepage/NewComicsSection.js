import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import ComicSquareCard from "components/common/ComicSquareCard";
import React from "react";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      // className="slick-arrow"
      onClick={onClick}
      color="text"
      size="small"
      sx={{
        position: "absolute",
        top: "40%",
        left: "-2rem",
        zIndex: 100,
        "&:hover": {
          color: "primary.main",
        },
      }}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      // className="slick-arrow"
      onClick={onClick}
      color="text"
      size="small"
      sx={{
        position: "absolute",
        top: "45%",
        right: "-2rem",
        zIndex: 100,
        "&:hover": {
          color: "primary.main",
        },
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
}

export default function NewComicsSection({ comics }) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    // speed: 500,
    // autoplay: true,
    // autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Box>
      <Slider {...settings} styl>
        {/* <Grid container spacing={3}>
          {comics
            .filter((comic) => comic.comic_weekday === "MO")
            .map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
        </Grid> */}
        {comics.slice(0, 10).map((comic) => (
          <Box key={comic.id} sx={{ p: 1.5 }}>
            <ComicSquareCard comic={comic} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

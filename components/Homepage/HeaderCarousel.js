import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function HeaderCarousel({ comics }) {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box>
      <Slider {...settings}>
        {comics.slice(0, 10).map((comic) => (
          <Box
            key={comic.id}
            sx={{ position: "relative", height: "33rem", width: "100%" }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${comic.picture})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                filter: "blur(0.5rem)",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                height: "100%",
                width: "100%",
                display: "flex",
                pt: 2,
                pb: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: {
                    xs: "70%",
                    xl: "50%",
                  },
                  height: {
                    xs: "90%",
                    xl: "80%",
                  },
                }}
              >
                <Image
                  alt={`ảnh carousel của ${comic.name}`}
                  src={comic.picture}
                  layout="fill"
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

import { Box, Container, Grid, Pagination, Typography } from "@mui/material";
import ComicSquareCard from "components/common/ComicSquareCard";
import HeadPage from "components/common/HeadPage";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { getComicsByGenre, getGenreDetail } from "utility/apis";
import axiosClient from "utility/axiosConfig";
import { BRAND_NAME } from "utility/constants";

export async function getServerSideProps(context) {
  const { slug, page } = context.params;
  const genre = await getGenreDetail(slug);
  const comics = await getComicsByGenre(slug, page);
  const num_comics = await axiosClient
    .get(`comics?genreId=${slug}`)
    .then((res) => res.data.length);

  return {
    props: {
      genre,
      comics,
      num_comics,
    },
  };
}

export default function Genre({ genre, comics, num_comics }) {
  const [currPage, setCurrPage] = useState(1);
  const router = useRouter();
  const { slug } = router.query;

  function handleChange(event, value) {
    setCurrPage(value);
    router.push(`/the-loai/${slug}/${value}`);
  }

  return (
    <>
      <HeadPage title={`Thể loại ${genre.name} - ${BRAND_NAME}`} />
      <Container maxWidth="2xl">
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
            <Typography variant="h4" fontWeight={500}>
              Thể loại:
            </Typography>
            <Typography variant="h4" fontWeight={500} color={genre.main_color}>
              {genre.name}
            </Typography>
            <Typography variant="h4" fontWeight={500} sx={{ ml: "auto" }}>
              {num_comics} bộ truyện
            </Typography>
          </Box>
          <Box mt={3}>
            <Grid container spacing={3}>
              {comics.map((comic) => (
                <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4}>
                  <ComicSquareCard comic={comic} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box mt={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              color="primary"
              count={Math.ceil(num_comics / 5)}
              page={currPage}
              onChange={handleChange}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}

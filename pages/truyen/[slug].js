import { Box, Container, Typography, Grid } from "@mui/material";
import Header from "components/ComicDetail/Header";
import HeadPage from "components/common/HeadPage";
import React from "react";
import axiosClient from "utility/axiosConfig";
import { BRAND_NAME } from "utility/constants";

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const comic = await axiosClient
    .get(`comics/${slug}?_expand=user&_expand=genre`)
    .then((res) => res.data);

  const chapters = await axiosClient
    .get(`chapters?_expand=comic&comicId=${slug}`)
    .then((res) => res.data);

  return {
    props: {
      comic,
      chapters,
    },
  };
}

export default function ComicDetail({ comic, chapters }) {
  return (
    <>
      <HeadPage title={`${comic.name} - ${BRAND_NAME.toUpperCase()}`} />
      <Container maxWidth="2xl">
        <Box sx={{ p: 3 }}>
          <Header comic={comic} />
          <Grid container>
            <Grid item xs={12} lg={8}>
              danh sách chương
            </Grid>
            <Grid item xs={12} lg={4}>
              thông tin truyện
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

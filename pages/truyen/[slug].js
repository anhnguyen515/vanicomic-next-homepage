import { Box, Container } from "@mui/material";
import React from "react";
import axiosClient from "utility/axiosConfig";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const comic = await axiosClient
    .get(`comics/${slug}?_expand=user&_expand=genre`)
    .then((res) => res.data);

  return {
    props: {
      comic,
    },
    revalidate: 3600,
  };
}

export default function ComicDetail({ comic }) {
  return (
    <>
      <Container maxWidth="2xl">
        <Box sx={{ p: 3 }}>{comic.name}</Box>
      </Container>
    </>
  );
}

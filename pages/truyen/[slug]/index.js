import { Box, Container, Grid, Pagination, Typography } from "@mui/material";
import AlsoRead from "components/ComicDetail/AlsoRead";
import ChaptersList from "components/ComicDetail/ChaptersList";
import Header from "components/ComicDetail/Header";
import InfoSection from "components/ComicDetail/InfoSection";
import HeadPage from "components/common/HeadPage";
import { useRouter } from "next/router";
import React from "react";
import axiosClient from "utility/axiosConfig";
import { BRAND_NAME } from "utility/constants";

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const comic = await axiosClient
    .get(`comics/${slug}?_expand=user&_expand=genre`)
    .then((res) => res.data);

  const alsoRead = await axiosClient
    .get(`comics?_expand=user&_expand=genre`)
    .then((res) => res.data);

  const chapters = await axiosClient
    .get(
      `chapters?_expand=comic&comicId=${slug}&_page=1&_sort=chap_num&_order=desc`
    )
    .then((res) => res.data);

  const totalChapters = await axiosClient
    .get(`chapters?_expand=comic&comicId=${slug}`)
    .then((res) => res.data.length);

  return {
    props: {
      slug,
      comic,
      chapters,
      totalChapters,
      alsoRead,
    },
  };
}

export default function ComicDetail({
  slug,
  comic,
  chapters,
  totalChapters,
  alsoRead,
}) {
  const router = useRouter();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    router.push(`/truyen/${slug}/${value}`);
  };
  return (
    <>
      <HeadPage title={`${comic.name} - ${BRAND_NAME.toUpperCase()}`} />
      {/* header */}
      <Header comic={comic} />
      {/* body */}
      <Container maxWidth="2xl">
        <Box sx={{ p: 3 }}>
          {comic.comic_status === "D" && (
            <Typography variant="h6" textAlign="center">
              {comic.name} hiện đang tạm ngưng. Bộ truyện sẽ sớm quay trở lại!
            </Typography>
          )}
          <Grid container>
            <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }}>
              <ChaptersList chapters={chapters} />
              <Pagination
                color="primary"
                // variant="outlined"
                count={Math.ceil(totalChapters / 10)}
                page={page}
                onChange={handleChange}
                sx={{ display: "flex", justifyContent: "center", mt: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={4} order={{ xs: 1, md: 2 }}>
              <InfoSection comic={comic} />
            </Grid>
          </Grid>
          <AlsoRead comics={alsoRead} />
        </Box>
      </Container>
    </>
  );
}

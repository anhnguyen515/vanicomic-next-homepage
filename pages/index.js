import { Box, Container, Grid } from "@mui/material";
import HeadPage from "components/common/HeadPage";
import { BRAND_NAME } from "utility/constants";
import HeaderCarousel from "components/Homepage/HeaderCarousel";
import axiosClient from "utility/axiosConfig";
import ComicSquareCard from "components/common/ComicSquareCard";

export async function getServerSideProps() {
  const comics = await axiosClient
    .get(`comics?_expand=user&_expand=genre`)
    .then((res) => res.data);

  return {
    props: {
      comics,
    },
  };
}

export default function Home({ comics }) {
  return (
    <>
      <HeadPage title={`${BRAND_NAME.toUpperCase()} - Đọc Truyện Online`} />
      <Box mb={2}>
        <HeaderCarousel comics={comics} />
      </Box>
      <Container maxWidth="2xl">
        <Box sx={{ padding: 3 }}>
          <Grid container spacing={3}>
            {comics.map((comic) => (
              <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2.4} xl={2}>
                <ComicSquareCard comic={comic} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

import { Box, Container, Grid, Typography } from "@mui/material";
import HeadPage from "components/common/HeadPage";
import { BRAND_NAME } from "utility/constants";
import HeaderCarousel from "components/Homepage/HeaderCarousel";
import axiosClient from "utility/axiosConfig";
import ComicSquareCard from "components/common/ComicSquareCard";
import WeeklySection from "components/Homepage/WeeklySection";

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
      <Box mb={3}>
        <HeaderCarousel comics={comics} />
      </Box>
      <Container maxWidth="2xl">
        <Box mb={3} sx={{ padding: 3 }}>
          <Typography variant="h4" fontWeight={500} textAlign="center">
            Phát hành hàng tuần
          </Typography>
          <WeeklySection comics={comics} />
        </Box>
      </Container>
    </>
  );
}

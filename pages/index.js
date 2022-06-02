import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import HeadPage from "components/common/HeadPage";
import { BRAND_NAME } from "utility/constants";
import HeaderCarousel from "components/Homepage/HeaderCarousel";
import axiosClient from "utility/axiosConfig";
import ComicSquareCard from "components/common/ComicSquareCard";
import WeeklySection from "components/Homepage/WeeklySection";
import NewComicsSection from "components/Homepage/NewComicsSection";

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
        {/* truyện hàng tuần */}
        <Box mb={3} sx={{ padding: 3 }}>
          <Divider>
            <Typography
              variant="h4"
              fontWeight={500}
              textAlign="center"
              gutterBottom
            >
              Truyện hàng tuần
            </Typography>
          </Divider>
          <WeeklySection comics={comics} />
        </Box>
        {/* truyện mới ra mắt */}
        <Box mb={3} sx={{ padding: 3 }}>
          <Divider>
            <Typography
              variant="h4"
              fontWeight={500}
              textAlign="center"
              gutterBottom
            >
              Truyện mới
            </Typography>
          </Divider>
          <NewComicsSection comics={comics} />
        </Box>
        {/* truyện theo thể loại */}
        <Box mb={3} sx={{ padding: 3 }}>
          <Divider>
            <Typography
              variant="h4"
              fontWeight={500}
              textAlign="center"
              gutterBottom
            >
              Thể loại
            </Typography>
          </Divider>
        </Box>
      </Container>
    </>
  );
}

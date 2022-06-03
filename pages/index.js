import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import HeadPage from "components/common/HeadPage";
import { BRAND_NAME } from "utility/constants";
import HeaderCarousel from "components/Homepage/HeaderCarousel";
import axiosClient from "utility/axiosConfig";
import ComicSquareCard from "components/common/ComicSquareCard";
import WeeklySection from "components/Homepage/WeeklySection";
import NewComicsSection from "components/Homepage/NewComicsSection";
import CategoryTitle from "components/common/CategoryTitle";
import SubCategoryTitle from "components/common/SubCategoryTitle";
import GenresSection from "components/Homepage/GenresSection";
import HotComicsSection from "components/Homepage/HotComicsSection";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export async function getServerSideProps() {
  const comics = await axiosClient
    .get(`comics?_expand=user&_expand=genre`)
    .then((res) => res.data);

  const genres = await axiosClient.get(`genres`).then((res) => res.data);

  return {
    props: {
      comics,
      genres,
    },
  };
}

export default function Home({ comics, genres }) {
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
            <CategoryTitle>Truyện hàng tuần</CategoryTitle>
          </Divider>
          <WeeklySection comics={comics} />
        </Box>
        {/* truyện mới ra mắt */}
        <Box mb={3} sx={{ padding: 3 }}>
          <Divider>
            <CategoryTitle>Truyện mới</CategoryTitle>
          </Divider>
          <NewComicsSection comics={comics} />
        </Box>
        {/* truyện theo thể loại */}
        <Box mb={3} sx={{ padding: 3 }}>
          <Divider>
            <CategoryTitle>Thể loại</CategoryTitle>
          </Divider>
          <GenresSection comics={comics} genres={genres} />
        </Box>
        {/* xếp hạng */}
        <Box mb={3} sx={{ padding: 3 }}>
          <Divider>
            <CategoryTitle>Bảng xếp hạng</CategoryTitle>
          </Divider>
          <Box mt={3}>
            <Grid container spacing={5}>
              <Grid item xs={12} lg={6}>
                <Divider textAlign="left">
                  <SubCategoryTitle>Truyện Hot</SubCategoryTitle>
                </Divider>
                <HotComicsSection comics={comics} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Divider textAlign="left">
                  <SubCategoryTitle>Mục gì đó</SubCategoryTitle>
                </Divider>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* xuất bản truyện */}
        <Divider />
        <Box mb={3} sx={{ padding: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: "sub.light",
                  p: 3,
                  borderRadius: 1,
                  height: "100%",
                }}
              >
                <Typography variant="h4" fontWeight={500} color="primary">
                  Tựa đề gì đó
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  maxime.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIosIcon />}
                  sx={{ mt: 3 }}
                >
                  Đăng tải ngay
                </Button>
              </Box>
            </Grid>
            <Grid container item xs={12} md={8} spacing={2}>
              {comics.slice(0, 8).map((comic) => (
                <Grid item key={comic.id} xs={3}>
                  <ComicSquareCard comic={comic} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

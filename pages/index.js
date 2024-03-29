import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import CategoryTitle from "components/common/CategoryTitle";
import ComicSquareCard from "components/common/ComicSquareCard";
import HeadPage from "components/common/HeadPage";
import SubCategoryTitle from "components/common/SubCategoryTitle";
import GenresSection from "components/Homepage/GenresSection";
import HeaderCarousel from "components/Homepage/HeaderCarousel";
import HotComicsSection from "components/Homepage/HotComicsSection";
import NewComicsSection from "components/Homepage/NewComicsSection";
import WeeklySection from "components/Homepage/WeeklySection";
import { getAllComics, getAllGenres } from "utility/apis";
import { BRAND_NAME } from "utility/constants";

export async function getServerSideProps() {
  const comics = await getAllComics();

  const genres = await getAllGenres();

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
                <SubCategoryTitle>Truyện Hot</SubCategoryTitle>
                <HotComicsSection comics={comics} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <SubCategoryTitle>Mục gì đó</SubCategoryTitle>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* xuất bản truyện */}
        <Box mb={3} sx={{ padding: 3 }}>
          <Divider sx={{ mb: 3 }} />
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
                  endIcon={<ChevronRightIcon />}
                  sx={{ mt: 3 }}
                >
                  Đăng tải ngay
                </Button>
              </Box>
            </Grid>
            <Grid container item xs={12} md={8} spacing={2}>
              {comics.slice(0, 8).map((comic) => (
                <Grid item key={comic.id} xs={6} sm={4} lg={3}>
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

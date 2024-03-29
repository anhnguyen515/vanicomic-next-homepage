import { Box, Container } from "@mui/material";
import ChapterNavbar from "components/ChapterDetail/ChapterNavbar";
import ChapterSection from "components/ChapterDetail/ChapterSection";
import CommentSection from "components/ChapterDetail/CommentSection";
import InfoSection from "components/ChapterDetail/InfoSection";
import AlsoRead from "components/ComicDetail/AlsoRead";
import HeadPage from "components/common/HeadPage";
import ScrollToTop from "components/common/ScrollToTop";
import React from "react";
import { getAllComics, getChapterDetail, getComicDetail } from "utility/apis";

export async function getServerSideProps(context) {
  const { slug, chap_num } = context.params;
  const comic = await getComicDetail(slug);
  const comics = await getAllComics(slug);
  const chapter = await getChapterDetail(slug, chap_num);
  return {
    props: {
      comic,
      comics,
      chapter,
    },
  };
}

export default function ChapterDetail({ comic, comics, chapter }) {
  return (
    <>
      <HeadPage title={`${chapter[0].title} - ${comic.name}`} />
      <ChapterNavbar chapter={chapter[0]} />
      <Container maxWidth="2xl">
        {/* hiện chương truyện */}
        <Box sx={{ p: 3 }}>
          <ChapterSection chapter={chapter[0]} />
        </Box>
      </Container>
      <Container maxWidth="xl">
        {/* một vài thông tin của truyện và chương truyện */}
        <Box sx={{ p: 3 }}>
          <InfoSection comic={comic} chapter={chapter[0]} />
        </Box>
      </Container>
      {/* phần bình luận */}
      <Container maxWidth="xl">
        <Box sx={{ p: 3 }}>
          <CommentSection comic={comic} chapter={chapter[0]} />
        </Box>
      </Container>
      <Container maxWidth="2xl">
        <Box sx={{ p: 3 }}>
          <AlsoRead comics={comics} />
        </Box>
      </Container>
    </>
  );
}

import { Box, Container } from "@mui/material";
import ChapterNavbar from "components/ChapterDetail/ChapterNavbar";
import CommentSection from "components/ChapterDetail/CommentSection";
import InfoSection from "components/ChapterDetail/InfoSection";
import HeadPage from "components/common/HeadPage";
import React from "react";
import { getChapterDetail, getComicDetail } from "utility/apis";

export async function getServerSideProps(context) {
  const { slug, chapter_slug } = context.params;
  const comic = await getComicDetail(slug);
  const chapter = await getChapterDetail(chapter_slug);
  return {
    props: {
      comic,
      chapter,
    },
  };
}

export default function ChapterDetail({ comic, chapter }) {
  return (
    <>
      <HeadPage title={`${chapter.title} - ${comic.name}`} />
      <ChapterNavbar chapter={chapter} />
      <Container maxWidth="2xl">
        <Box sx={{ p: 3 }}>
          <Box mb={3}>Phần hiển thị chương truyện</Box>
          {/* một vài thông tin của truyện và chương truyện */}
          <Box mb={3}>
            <InfoSection comic={comic} chapter={chapter} />
          </Box>
        </Box>
      </Container>
      {/* phần bình luận */}
      <Container maxWidth="xl">
        <Box sx={{ p: 3 }}>
          <CommentSection comic={comic} chapter={chapter} />
        </Box>
      </Container>
    </>
  );
}

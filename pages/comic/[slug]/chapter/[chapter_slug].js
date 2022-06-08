import { Box, Container, Pagination } from "@mui/material";
import ChapterNavbar from "components/ChapterDetail/ChapterNavbar";
import CommentSection from "components/ChapterDetail/CommentSection";
import InfoSection from "components/ChapterDetail/InfoSection";
import AlsoRead from "components/ComicDetail/AlsoRead";
import HeadPage from "components/common/HeadPage";
import React, { useEffect, useState } from "react";
import {
  getAllComics,
  getChapterComments,
  getChapterDetail,
  getComicDetail,
} from "utility/apis";

export async function getServerSideProps(context) {
  const { slug, chapter_slug } = context.params;
  const comic = await getComicDetail(slug);
  const comics = await getAllComics(slug);
  const chapter = await getChapterDetail(chapter_slug);
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
      <Container maxWidth="2xl">
        <Box sx={{ p: 3 }}>
          <AlsoRead comics={comics} />
        </Box>
      </Container>
    </>
  );
}

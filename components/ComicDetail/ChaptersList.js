import { Box } from "@mui/material";
import ChapterCard from "components/common/ChapterCard";
import SubCategoryTitle from "components/common/SubCategoryTitle";
import React from "react";

export default function ChaptersList({ chapters }) {
  return (
    <>
      <SubCategoryTitle>Danh sách chương</SubCategoryTitle>
      <Box sx={{ padding: { xs: 0, md: 3 } }}>
        {chapters.map((chapter) => (
          <ChapterCard key={chapter.id} chapter={chapter} />
        ))}
      </Box>
    </>
  );
}

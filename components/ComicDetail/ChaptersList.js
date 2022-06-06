import { Box, Typography } from "@mui/material";
import ChapterCard from "components/common/ChapterCard";
import React from "react";

export default function ChaptersList({ chapters }) {
  return (
    <>
      <Box sx={{ padding: { xs: 0, md: 3 } }}>
        {chapters.map((chapter) => (
          <ChapterCard key={chapter.id} chapter={chapter} />
        ))}
      </Box>
    </>
  );
}

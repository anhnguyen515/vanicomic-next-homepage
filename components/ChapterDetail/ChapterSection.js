import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function ChapterSection({ chapter }) {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {chapter.content.map((item, index) => (
          <Box
            key={index}
            sx={{
              border: "1px solid red",
              width: {
                xs: "100%",
                md: "80%",
              },
              maxWidth: "800px",
              aspectRatio: "2/3",
            }}
          >
            <Image
              alt={`Trang chuyện ${index + 1} chương ${chapter.chap_num}`}
              src={item}
              width={800}
              height={1200}
              layout="responsive"
            />
          </Box>
        ))}
      </Box>
    </>
  );
}

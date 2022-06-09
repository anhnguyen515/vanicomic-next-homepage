import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {
  Box,
  Breadcrumbs,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { getAllComicChapters } from "utility/apis";

export default function ChapterNavbar({ chapter }) {
  const router = useRouter();
  const { slug } = router.query;
  const [chapters, setChapters] = useState([]);
  const [currChapter, setCurrChapter] = useState(chapter.chap_num);
  const [offset, setOffset] = useState(0);
  const prevOffset = useRef();

  const handleChange = (event) => {
    setCurrChapter(event.target.value);
  };

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  useEffect(() => {
    prevOffset.current = offset;
  }, [offset]);

  useEffect(() => {
    async function getAllChapters() {
      const data = await getAllComicChapters(slug);
      setChapters(data);
    }
    getAllChapters();
  }, []);

  return (
    <AppBar
      elevation={0}
      color="sub"
      position="sticky"
      sx={{
        top: 88,
        transition: "all 0.5s",
        opacity: offset > prevOffset.current ? 0 : 1,
        zIndex: offset > prevOffset.current ? -1 : 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: 1,
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Breadcrumbs sx={{ color: "text.main" }}>
          <Link href={`/comic/${chapter.comic.id}/1`} passHref>
            <Typography
              fontSize="1.2rem"
              sx={{ cursor: "pointer", "&:hover": { color: "text.light" } }}
            >
              {chapter.comic.name}
            </Typography>
          </Link>
          <Typography color="text.light" fontSize="1.2rem">
            {chapter.title}
          </Typography>
        </Breadcrumbs>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton color="text">
            <ArrowLeftIcon fontSize="large" />
          </IconButton>
          <FormControl sx={{ minWidth: "20rem" }} size="small">
            <Select
              value={currChapter}
              onChange={handleChange}
              sx={{
                color: "text.main",
                "& .MuiSvgIcon-root": {
                  color: "text.main",
                },
              }}
              MenuProps={{
                PaperProps: { sx: { maxHeight: "20rem" } },
              }}
            >
              {chapters.map((chapter) => (
                <MenuItem
                  key={chapter.id}
                  value={chapter.chap_num}
                  onClick={() =>
                    router.push(`/comic/${slug}/chapter/${chapter.id}`)
                  }
                >
                  <Typography fontWeight={500}>{chapter.title}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <IconButton color="text">
            <ArrowRightIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
}

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
import React, { useEffect, useState } from "react";
import { getAllComicChapters } from "utility/apis";

export default function ChapterNavbar({ chapter }) {
  const router = useRouter();
  const { slug } = router.query;
  const [chapters, setChapters] = useState([]);
  const [currChapter, setCurrChapter] = useState(chapter.chap_num);
  const [scrollDown, setScrollDown] = useState(false);

  const chapNumArr = chapters.map((chapter) => chapter.chap_num);
  const minChapNum = Math.min(...chapNumArr);
  const maxChapNum = Math.max(...chapNumArr);

  const handleChange = (event) => {
    setCurrChapter(event.target.value);
  };

  useEffect(() => {
    async function getAllChapters() {
      const data = await getAllComicChapters(slug);
      setChapters(data);
    }
    getAllChapters();
  }, []);

  {
    /* check scroll direction */
  }
  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDown(scrollY > lastScrollY ? true : false);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDown]);

  return (
    <>
      <AppBar
        elevation={0}
        color="sub"
        position="sticky"
        sx={{
          top: 0,
          transition: "opacity 0.3s",
          opacity: scrollDown ? 0 : 1,
          zIndex: scrollDown ? -1 : 1,
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
            <Link href={`/truyen/${chapter.comic.id}/1`} passHref>
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
            <IconButton
              color="text"
              disabled={chapter.chap_num === minChapNum ? true : false}
              onClick={() => {
                router.push(`/truyen/${slug}/chuong/${chapter.chap_num - 1}`);
                setCurrChapter(chapter.chap_num - 1);
              }}
            >
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
                      router.push(`/truyen/${slug}/chuong/${chapter.chap_num}`)
                    }
                  >
                    <Typography fontWeight={500}>{chapter.title}</Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <IconButton
              color="text"
              disabled={chapter.chap_num === maxChapNum ? true : false}
              onClick={() => {
                router.push(`/truyen/${slug}/chuong/${chapter.chap_num + 1}`);
                setCurrChapter(chapter.chap_num + 1);
              }}
            >
              <ArrowRightIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </AppBar>
    </>
  );
}

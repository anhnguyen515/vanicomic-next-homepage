import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Breadcrumbs,
  Chip,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { getAllComicChapters } from "utility/apis";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChapterNavbar({ chapter }) {
  const router = useRouter();
  const { slug } = router.query;
  const [chapters, setChapters] = React.useState([]);
  const [currChapter, setCurrChapter] = React.useState(chapter.chap_num);
  const [show, setShow] = React.useState(true);

  const handleChange = (event) => {
    setCurrChapter(event.target.value);
  };

  React.useEffect(() => {
    async function getAllChapters() {
      const data = await getAllComicChapters(slug);
      setChapters(data);
    }
    getAllChapters();
  }, []);

  return (
    <>
      <AppBar
        elevation={0}
        color="sub"
        position="sticky"
        sx={{
          top: 86,
          transition: "all 0.5s",
          opacity: show ? 1 : 0,
          zIndex: show ? 1 : -1,
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
      <Box
        sx={{
          position: "sticky",
          top: 150,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon
          icon={faArrowTurnDown}
          width={12}
          style={{ transform: "rotate(180deg)" }}
        />
        <IconButton
          size="small"
          color="sub"
          onClick={() => setShow((prev) => !prev)}
          sx={{ mt: 2, ml: 0.5, mr: 0.5, backgroundColor: "sub.light" }}
        >
          {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </Box>
    </>
  );
}

import {
  faFacebookF,
  faRedditAlien,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

export default function Header({ comic }) {
  return (
    <>
      <Box
        sx={{
          padding: 3,
          backgroundImage: `linear-gradient(to bottom, rgba(41, 41, 41, 0.6), rgba(41, 41, 41, 0.6)),url(${comic.picture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          maxWidth="2xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            minHeight: "30vh",
          }}
        >
          <Typography variant="h5" color={comic.genre.main_color}>
            {comic.genre.name}
          </Typography>
          <Typography variant="h3" color="text.light">
            {comic.name}
          </Typography>
          <Typography variant="h6" color="text.light">
            {comic.user.name}
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box>
                <IconButton
                  sx={{
                    color: "text.light",
                    backgroundColor: "sub.main",
                    "&:hover": {
                      backgroundColor: "#3C8FFF",
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faFacebookF} width={16} height={16} />
                </IconButton>
              </Box>
              <Box>
                <IconButton
                  sx={{
                    color: "text.light",
                    backgroundColor: "sub.main",
                    "&:hover": {
                      backgroundColor: "#1A8CD8",
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faTwitter} width={16} />
                </IconButton>
              </Box>
              <Box>
                <IconButton
                  sx={{
                    color: "text.light",
                    backgroundColor: "sub.main",
                    "&:hover": {
                      backgroundColor: "#FF4501",
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faRedditAlien} width={16} />
                </IconButton>
              </Box>
              <Chip label="Đánh giá" icon={<AddIcon />} color="primary" />
            </Box>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              startIcon={<BookmarkAddIcon />}
            >
              Theo dõi truyện
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

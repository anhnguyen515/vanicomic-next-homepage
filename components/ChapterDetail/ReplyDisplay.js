import { Box, Typography } from "@mui/material";
import React from "react";
import parse from "html-react-parser";
import { timesFromNow } from "utility/utils";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CommentDisplay({ reply }) {
  return (
    <Box
      sx={{ display: "flex", p: 1, borderBottom: 1, borderColor: "text.light" }}
    >
      <Box>
        <FontAwesomeIcon
          icon={faArrowTurnUp}
          width={10}
          style={{
            transform: "rotate(90deg)",
            marginTop: "0.5rem",
            marginRight: "1rem",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Typography fontSize="1.1rem" fontWeight={500}>
          {reply.user.name}
        </Typography>
        <Box>{parse(reply.content_safe)}</Box>
        <Typography variant="body2" color="text.main" gutterBottom>
          {timesFromNow(reply.created_at)}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography
              color="text.main"
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <ThumbUpIcon fontSize="small" /> {reply.likes.length}
            </Typography>
            <Typography
              color="text.main"
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <ThumbDownIcon fontSize="small" /> {reply.dislikes.length}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

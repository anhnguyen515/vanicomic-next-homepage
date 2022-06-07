import { Box, Typography } from "@mui/material";
import React from "react";
import parse from "html-react-parser";
import { timesFromNow } from "utility/utils";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export default function CommentDisplay({ comment }) {
  return (
    <>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "text.light",
          padding: 1,
          "&:first-of-type": { borderTop: 1, borderColor: "text.light" },
        }}
      >
        <Typography fontSize="1.1rem" fontWeight={500}>
          {comment.user.name}
        </Typography>
        <Box>{parse(comment.content_safe)}</Box>
        <Typography variant="body2" color="text.main" gutterBottom>
          {timesFromNow(comment.created_at)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography color="text.main">Trả lời bình luận</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography
              color="text.main"
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <ThumbUpIcon fontSize="small" /> {comment.likes.length}
            </Typography>
            <Typography
              color="text.main"
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <ThumbDownIcon fontSize="small" /> {comment.dislikes.length}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

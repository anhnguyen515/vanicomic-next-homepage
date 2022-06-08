import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { timesFromNow } from "utility/utils";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axiosClient from "utility/axiosConfig";
import ReplyDisplay from "components/ChapterDetail/ReplyDisplay";

export default function CommentDisplay({ comment }) {
  const [replies, setReplies] = useState([]);
  const [showReplies, setShowReplies] = useState(false);

  function handleShowReplies() {
    setShowReplies((prev) => !prev);
  }

  useEffect(() => {
    async function getReplies() {
      const data = await axiosClient
        .get(`comments?parent.id=${comment.id}&_expand=user`)
        .then((res) => res.data);
      setReplies(data);
    }
    getReplies();
  }, []);

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
          }}
        >
          <Typography
            color="text.main"
            mr="auto"
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={handleShowReplies}
          >
            Phản hồi: {replies.length} <ArrowDropDownIcon fontSize="small" />
          </Typography>
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
      {showReplies && (
        <Box>
          {replies.map((reply) => (
            <ReplyDisplay key={reply.id} reply={reply} />
          ))}
          <Typography>người dùng viết phản hồi bình luận ở đây</Typography>
        </Box>
      )}
    </>
  );
}

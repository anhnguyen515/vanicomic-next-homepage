import { Box, Button, Chip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { timesFromNow } from "utility/utils";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
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
          <Chip
            label={`Phản hồi: ${replies.length}`}
            size="small"
            icon={showReplies ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            onClick={handleShowReplies}
            sx={{ mr: "auto" }}
          />
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
        <Box pl={5}>
          {replies.length !== 0 ? (
            replies
              .slice(0, 5)
              .map((reply) => <ReplyDisplay key={reply.id} reply={reply} />)
          ) : (
            <Typography mt={2} fontStyle="italic">
              Chưa có phản hồi nào cho bình luận này
            </Typography>
          )}
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            sx={{ mt: 2, mb: 3 }}
          >
            Viết phản hồi
          </Button>
        </Box>
      )}
    </>
  );
}

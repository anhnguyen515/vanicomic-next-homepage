import { Avatar, Box, Divider, Typography } from "@mui/material";
import SubCategoryTitle from "components/common/SubCategoryTitle";
import React, { useEffect, useState } from "react";
import { getChapterComments } from "utility/apis";
import CommentDisplay from "./CommentDisplay";

export default function CommentSection({ comic, chapter }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getComments() {
      const data = await getChapterComments(chapter.id);
      setComments(data.filter((comment) => comment.parent === null));
    }
    getComments();
  }, [chapter.id]);

  return (
    <>
      <Box mb={3} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="h5">Tác giả:</Typography>
        <Avatar
          src={comic.user.avatar_url}
          sx={{ width: "4rem", height: "4rem" }}
        />
        <Typography variant="h5" fontWeight={500}>
          {comic.user.name}
        </Typography>
      </Box>

      <Box mb={3}>
        <SubCategoryTitle>Bình luận</SubCategoryTitle>
        <Box mb={3}>người dùng viết bình luận ở đây</Box>
        <Box>
          {comments.map((comment) => (
            <CommentDisplay key={comment.id} comment={comment} />
          ))}
        </Box>
      </Box>
    </>
  );
}

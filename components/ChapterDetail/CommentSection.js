import { Avatar, Box, Typography, Button } from "@mui/material";
import SubCategoryTitle from "components/common/SubCategoryTitle";
import React, { useEffect, useState } from "react";
import { getChapterComments } from "utility/apis";
import CommentDisplay from "./CommentDisplay";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function CommentSection({ comic, chapter }) {
  const [comments, setComments] = useState([]);
  const [commentsCount, setCommentsCount] = useState(0);

  useEffect(() => {
    async function getComments() {
      const data = await getChapterComments(chapter.id);
      setComments(data.filter((comment) => comment.parent === null));
      setCommentsCount(data.length);
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
        <SubCategoryTitle>Bình luận ({commentsCount})</SubCategoryTitle>
        <Box mt={1}>
          {comments.length !== 0 ? (
            comments
              .slice(0, 10)
              .map((comment) => (
                <CommentDisplay key={comment.id} comment={comment} />
              ))
          ) : (
            <Typography fontStyle="italic">
              Chưa có bình luận nào cho chương truyện này
            </Typography>
          )}
        </Box>
      </Box>
      <Box mb={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<ChevronRightIcon />}
        >
          Đến trang bình luận
        </Button>
      </Box>
    </>
  );
}

import { Box, Container } from "@mui/material";
import React from "react";

export default function DailySchedule() {
  return (
    <>
      <Container maxWidth="2xl">
        <Box sx={{ p: 3 }}>
          Chia truyện theo thứ. Mỗi thứ một trang. Có pagination
        </Box>
      </Container>
    </>
  );
}

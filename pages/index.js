import { Box, Container } from "@mui/material";
import HeadPage from "components/common/HeadPage";
import { BRAND_NAME } from "utility/constants";

export default function Home() {
  return (
    <>
      <HeadPage title={`${BRAND_NAME.toUpperCase()} - Đọc Truyện Online`} />
      <Container maxWidth="2xl">
        <Box sx={{ padding: 3 }}>Homepage</Box>
      </Container>
    </>
  );
}

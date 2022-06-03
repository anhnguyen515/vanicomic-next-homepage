import {
  faAppStore,
  faDiscord,
  faFacebook,
  faGooglePlay,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BRAND_NAME } from "utility/constants";

export default function Footer() {
  return (
    <>
      <Box sx={{ backgroundColor: "sub.main", color: "text.main" }}>
        <Container maxWidth="2xl">
          <Box
            sx={{
              padding: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // gap: 3,
            }}
          >
            <Image
              src="/origin-logo.svg"
              alt={`${BRAND_NAME} logo`}
              width={80}
              height={80}
              layout="fixed"
            />
            <Breadcrumbs
              separator="|"
              sx={{
                color: "text.main",
              }}
            >
              <Link href="/" passHref>
                <Typography sx={link}>Trang Chủ</Typography>
              </Link>
              <Link href="/page/gioi-thieu" passHref>
                <Typography sx={link}>Giới Thiệu</Typography>
              </Link>
              <Link href="/page/quy-dinh" passHref>
                <Typography sx={link}>Quy Định</Typography>
              </Link>
              <Link href="/page/dieu-khoan-dich-vu" passHref>
                <Typography sx={link}>Điều Khoản</Typography>
              </Link>
              <Link href="/lien-he" passHref>
                <Typography sx={link}>Liên Hệ</Typography>
              </Link>
            </Breadcrumbs>
          </Box>
        </Container>
      </Box>

      {/* thông tin về Vietnovel */}
      <Box sx={{ backgroundColor: "sub.dark", color: "text.main" }}>
        <Container maxWidth="2xl">
          <Box sx={{ padding: 3 }}>
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: 5,
                  mt: 4,
                  mb: 5,
                }}
              >
                <a
                  href={
                    "https://apps.apple.com/us/app/vietnovel-origin/id1359621195?l=vi&ls=1"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItem: "center",
                      gap: 1,
                      "&:hover": {
                        color: "text.light",
                      },
                    }}
                  >
                    <FontAwesomeIcon icon={faAppStore} width={16} />
                    <Typography>Tải App Đọc Truyện iOS</Typography>
                  </Box>
                </a>
                <a
                  href={
                    "https://play.google.com/store/apps/details?id=com.vietnovel.app"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItem: "center",
                      gap: 1,
                      "&:hover": {
                        color: "text.light",
                      },
                    }}
                  >
                    <FontAwesomeIcon icon={faGooglePlay} width={16} />
                    <Typography>Tải App Đọc Truyện Android</Typography>
                  </Box>
                </a>
              </Box>
              <Typography variant="caption" fontStyle="italic">
                Tất cả hình ảnh, logo, tác phẩm văn học, văn bản, lời giới thiệu
                đều thuộc bản quyền của Công Ty Cổ Phần Vietnovel. Nghiêm cấm
                sao chép, in ấn, tái xuất bản dưới mọi hình thức. Nếu vi phạm sẽ
                bị nghiêm trị theo luật pháp của nước Cộng Hòa Xã Hội Chủ Nghĩa
                Việt Nam và Công ước toàn cầu về bản quyền (UCC).
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  mt: 2,
                }}
              >
                <a
                  href="https://twitter.com/vietnovel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography
                    sx={{
                      "&:hover": {
                        color: "text.light",
                      },
                    }}
                  >
                    <FontAwesomeIcon icon={faTwitter} width={26} />
                  </Typography>
                </a>
                <a
                  href="https://www.facebook.com/VietnovelOrigin/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography
                    sx={{
                      "&:hover": {
                        color: "text.light",
                      },
                    }}
                  >
                    <FontAwesomeIcon icon={faFacebook} width={26} />
                  </Typography>
                </a>
                <a
                  href="https://www.facebook.com/groups/vietnovel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography
                    sx={{
                      "&:hover": {
                        color: "text.light",
                      },
                    }}
                  >
                    <FontAwesomeIcon icon={faUserGroup} width={26} />
                  </Typography>
                </a>
                <a
                  href="https://discord.com/invite/xfTsM9m"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography
                    sx={{
                      "&:hover": {
                        color: "text.light",
                      },
                    }}
                  >
                    <FontAwesomeIcon icon={faDiscord} width={26} />
                  </Typography>
                </a>
              </Box>
              <Typography sx={{ mt: 2, fontWeight: 500 }}>
                &copy;{" "}
                <a
                  href="https://company.vietnovel.com"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  Vietnovel Corporation
                </a>
                . All Rights Reserved.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

const link = {
  cursor: "pointer",
  "&:hover": {
    color: "white",
  },
};

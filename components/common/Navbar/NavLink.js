import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function NavLink() {
  const router = useRouter();

  const generalStyle = {
    fontSize: "1.2rem",
    borderRadius: 1,
    fontWeight: 500,
    "&:hover": {
      color: "primary.light",
    },
  };

  const activeStyle = {
    ...generalStyle,
    border: 1,
    borderColor: "primary.main",
    color: "primary.main",
  };

  const linkStyle = {
    display: "block",
    color: "inherit",
    cursor: "pointer",
    padding: "0.4rem 0.7rem",
    textDecoration: "none",
    width: "100%",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          lg: "row",
          xs: "column",
        },
        gap: 1,
        alignItems: {
          lg: "center",
        },
      }}
    >
      <Typography
        variant="h6"
        textTransform="uppercase"
        sx={router.asPath.includes("/tac-pham") ? activeStyle : generalStyle}
      >
        <Link href="/tac-pham">
          <a style={linkStyle}>Tác phẩm</a>
        </Link>
      </Typography>

      <Typography
        variant="h6"
        textTransform="uppercase"
        sx={router.asPath.includes("/the-loai") ? activeStyle : generalStyle}
      >
        <Link href="/the-loai">
          <a style={linkStyle}>Thể loại</a>
        </Link>
      </Typography>

      <Typography
        variant="h6"
        textTransform="uppercase"
        sx={router.asPath.includes("/noi-bat") ? activeStyle : generalStyle}
      >
        <Link href={"/noi-bat"}>
          <a style={linkStyle}>Nổi bật</a>
        </Link>
      </Typography>

      <Typography
        variant="h6"
        textTransform="uppercase"
        sx={router.asPath.includes("/canvas") ? activeStyle : generalStyle}
      >
        <Link href="/canvas">
          <a style={linkStyle}>Canvas</a>
        </Link>
      </Typography>
    </Box>
  );
}

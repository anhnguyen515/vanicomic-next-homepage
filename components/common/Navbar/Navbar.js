import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { BRAND_NAME } from "utility/constants";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Navbar() {
  return (
    <>
      <AppBar
        position="static"
        color="background"
        elevation={0}
        variant="outlined"
      >
        <Container maxWidth="2xl">
          <Toolbar>
            <Link href="/">
              <a>
                <Box sx={{ mr: 2 }}>
                  <Image
                    src="/origin-logo-black.svg"
                    alt={`${BRAND_NAME} logo`}
                    width={80}
                    height={80}
                    layout="fixed"
                  />
                </Box>
              </a>
            </Link>
            <NavDesktop />
            <NavMobile />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

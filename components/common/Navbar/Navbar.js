import { AppBar, Container, Toolbar, Box } from "@mui/material";
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
        position="sticky"
        color="background"
        elevation={0}
        variant="outlined"
        sx={{ top: 0 }}
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

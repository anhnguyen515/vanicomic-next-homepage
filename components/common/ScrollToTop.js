import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", event);
    };
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <>
      {showButton && (
        <Box
          sx={{
            display: "inline-block",
            pl: {
              xs: 2,
              xl: 5,
            },
            position: "sticky",
            top: {
              xs: "94%",
              xl: "90%",
            },
            zIndex: 9999,
          }}
        >
          <IconButton
            color="primary"
            onClick={scrollToTop}
            sx={{
              boxShadow: "0 0 3px",
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Box>
      )}
    </>
  );
}

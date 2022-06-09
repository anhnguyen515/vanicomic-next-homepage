import { Button, IconButton, Tooltip } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
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
        <IconButton
          onClick={scrollToTop}
          size="large"
          sx={{
            border: 1,
            borderColor: "text.main",
            color: "text.main",
            opacity: 0.7,
            position: "sticky",
            top: "93%",
            left: "1%",
            zIndex: 9999,
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      )}
    </>
  );
}

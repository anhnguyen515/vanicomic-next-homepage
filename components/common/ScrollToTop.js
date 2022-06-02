import { Button, IconButton, Tooltip } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
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
        <Tooltip title="Quay về đầu trang" arrow>
          <IconButton
            onClick={scrollToTop}
            size="large"
            sx={{
              backgroundColor: "text.light",
              boxShadow: "0 0 3px black",
              color: "text.main",
              position: "sticky",
              top: "90vh",
              left: "1rem",
              zIndex: 100,
              opacity: 0.6,
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
}

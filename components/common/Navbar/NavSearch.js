import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import React from "react";

export default function NavSearch() {
  return (
    <>
      <IconButton
        sx={{
          "&:hover": {
            color: "primary.light",
          },
        }}
      >
        <SearchIcon />
      </IconButton>
    </>
  );
}

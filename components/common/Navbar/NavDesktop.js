import Box from "@mui/material/Box";
import * as React from "react";
import NavAuth from "./NavAuth";
import NavAuthDropdown from "./NavAuthDropdown";
import NavLink from "./NavLink";
import NavPublish from "./NavPublish";
import NavSearch from "./NavSearch";

export default function NavDesktop() {
  return (
    <Box
      sx={{
        justifyContent: "space-between",
        width: "100%",
        display: {
          xs: "none",
          lg: "flex",
        },
      }}
    >
      <NavLink />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <NavSearch />
        <NavPublish />
        <NavAuthDropdown>
          <NavAuth />
        </NavAuthDropdown>
      </Box>
    </Box>
  );
}

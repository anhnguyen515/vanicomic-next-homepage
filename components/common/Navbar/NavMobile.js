import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import NavAuth from "./NavAuth";
import NavAuthDropdown from "./NavAuthDropdown";
import NavLink from "./NavLink";
import NavPublish from "./NavPublish";
import NavSearch from "./NavSearch";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box
      sx={{
        ml: "auto",
        display: {
          xs: "block",
          lg: "none",
        },
      }}
    >
      <React.Fragment key={"right"}>
        <IconButton onClick={toggleDrawer("right", true)} color="inherit">
          <MenuIcon />
        </IconButton>
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "background.default",
              padding: 1,
            },
          }}
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          <Box sx={{ minWidth: 200 }} role="presentation">
            <NavLink />
            <NavSearch />
            <Divider
              sx={{
                mr: 1,
                ml: 1,
                // mt: 2,
                mb: 2,
              }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <NavPublish />
              <NavAuthDropdown>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <NavAuth />
                </Box>
              </NavAuthDropdown>
            </Box>
          </Box>
        </Drawer>
      </React.Fragment>
    </Box>
  );
}

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

export default function NavAuthDropdown({ children }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {children}
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemText>Tác phẩm đang theo dõi</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText>Tác giả đang theo dõi</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText>Bình luận</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText>Tài khoản</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemText>Đăng xuất</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}

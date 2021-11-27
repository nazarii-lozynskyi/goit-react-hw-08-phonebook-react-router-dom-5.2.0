import * as React from "react";

import { NavLink } from "react-router-dom";

import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box,
} from "@mui/material";

import { Login, HowToReg } from "@mui/icons-material";

export default function AuthNav() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <List component="nav" aria-label="navigation" sx={{}}>
      <Box sx={{ width: "fit-content" }}>
        <NavLink to="/login" variant="h6" style={{ textDecoration: "none" }}>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <Login sx={{ width: "32px", height: "32px", color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Login" sx={{ color: "white" }} />
          </ListItemButton>
        </NavLink>
      </Box>

      <Box sx={{ width: "fit-content" }}>
        <NavLink to="/register" variant="h6" style={{ textDecoration: "none" }}>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <HowToReg
                sx={{ width: "32px", height: "32px", color: "white" }}
              />
            </ListItemIcon>
            <ListItemText primary="Registration" sx={{ color: "white" }} />
          </ListItemButton>
        </NavLink>
      </Box>
    </List>
  );
}

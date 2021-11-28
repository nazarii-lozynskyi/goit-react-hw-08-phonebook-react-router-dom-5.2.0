import * as React from "react";

import { NavLink } from "react-router-dom";

import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box,
  Button,
} from "@mui/material";

import { Home, Notes } from "@mui/icons-material";

export default function AuthNav() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <List component="nav" sx={{ display: "flex" }}>
      <Box sx={{ width: "fit-content" }}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Button
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <Home sx={{ width: "32px", height: "32px", color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Home" sx={{ color: "white" }} />
          </Button>
        </NavLink>
      </Box>

      <Box sx={{ width: "fit-content" }}>
        <NavLink to="/contacts" variant="h6" style={{ textDecoration: "none" }}>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <Notes sx={{ width: "32px", height: "32px", color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Contacts" sx={{ color: "white" }} />
          </ListItemButton>
        </NavLink>
      </Box>
    </List>
  );
}

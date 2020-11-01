import React, { useState } from "react";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  Link,
} from "@material-ui/core";
import { Menu, ChevronLeft } from "@material-ui/icons";

const SideMenu = ({ title, links }) => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" onClick={handleDrawerOpen}>
            <Menu />
          </IconButton>
          <Typography variant="h5">{title}</Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft />
        </IconButton>
        <Divider />
        <List>
          {links.map((link) => (
            <ListItem>
              <Link
                component={link.linkComponent}
                to={link.path}
                variant="h6"
                onClick={handleDrawerClose}
              >
                {link.text}
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default SideMenu;

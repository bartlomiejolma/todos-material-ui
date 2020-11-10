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
import styled from "styled-components";

const StyledList = styled(List)`
  width: 300px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const StyledLink = styled(Link)`
  width: 300px;
  color: ${({ theme }) => theme.palette.text.primary};
`;
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
        <StyledList>
          {links.map((link) => (
            <ListItem>
              <StyledLink
                component={link.linkComponent}
                to={link.path}
                variant="h6"
                onClick={handleDrawerClose}
              >
                {link.text}
              </StyledLink>
            </ListItem>
          ))}
        </StyledList>
      </Drawer>
    </>
  );
};

export default SideMenu;

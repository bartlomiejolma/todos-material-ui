import React, { useState } from "react";
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Link,
  List,
  ListItem,
} from "@material-ui/core";
import { Link as RouterLink, BrowserRouter as Router } from "react-router-dom";
import { Menu, ChevronLeft } from "@material-ui/icons";

const Content = () => {
  return <Button color="primary">Hello World</Button>;
};

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
            <ListItem>{link}</ListItem>
          ))}
          <ListItem></ListItem>
          <ListItem></ListItem>
        </List>
      </Drawer>
    </>
  );
};

const links = [
  <Link component={RouterLink} to="/" variant="h6">
    Todos
  </Link>,
  <Link component={RouterLink} to="/kanban" variant="h6">
    Kanban
  </Link>,
];

function App() {
  return (
    <Router>
      <SideMenu title="Todos" links={links} />
      <Content />
    </Router>
  );
}

export default App;

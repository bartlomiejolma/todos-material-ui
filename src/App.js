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

function App() {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" onClick={handleDrawerOpen}>
            <Menu />
          </IconButton>
          <Typography variant="h5">Todos</Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft />
        </IconButton>
        <Divider />
        <List>
          <ListItem>
            <Link component={RouterLink} to="/" variant="h6">
              Todos
            </Link>
          </ListItem>
          <ListItem>
            <Link component={RouterLink} to="/kanban" variant="h6">
              Kanban
            </Link>
          </ListItem>
        </List>
      </Drawer>
      <Content />
    </Router>
  );
}

export default App;

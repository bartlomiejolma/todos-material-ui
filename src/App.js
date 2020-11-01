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
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" onClick={handleDrawerOpen}>
            <Menu />
          </IconButton>
          <Typography variant="h5">Todos</Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft />
          <Divider />
          <Router>
            <Link component={RouterLink} to="/">
              Todos
            </Link>
            <Link component={RouterLink} to="/kanban">
              Kanban
            </Link>
          </Router>
        </IconButton>
      </Drawer>
      <Content />
    </>
  );
}

export default App;

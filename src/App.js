import React, { useState } from "react";
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
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
        </IconButton>
      </Drawer>
      <Content />
    </>
  );
}

export default App;

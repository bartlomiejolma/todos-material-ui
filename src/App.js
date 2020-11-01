import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Content = () => {
  return <Button color="primary">Hello World</Button>;
};
function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">Todos</Typography>
        </Toolbar>
      </AppBar>
      <Content />
    </>
  );
}

export default App;

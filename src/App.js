import React from "react";
import { Button } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import links from "./navigation/links";
import SideMenu from "./navigation/SideMenu";

const Content = () => {
  return <Button color="primary">Hello World</Button>;
};



function App() {
  return (
    <Router>
      <SideMenu title="Todos" links={links} />
      <Content />
    </Router>
  );
}

export default App;

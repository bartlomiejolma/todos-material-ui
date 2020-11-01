import React from "react";
import { Button, Link } from "@material-ui/core";
import { Link as RouterLink, BrowserRouter as Router } from "react-router-dom";

const Content = () => {
  return <Button color="primary">Hello World</Button>;
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

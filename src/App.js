import React from "react";
import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { links, SideMenu } from "./navigation";

function App() {
  return (
    <Router>
      <SideMenu title="Todos" links={links} />
      <Switch>
        {links.map((link) => (
          <Route exact path={link.path}>{link.component}</Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;

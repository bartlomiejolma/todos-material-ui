import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { links, SideMenu } from "./navigation";

function App() {
  return (
    <Router>
      <SideMenu title="Todos" links={links} />
      <Switch>
        {links.map(({ path, Component }) => (
          <Route exact path={path}>
            <Component />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;

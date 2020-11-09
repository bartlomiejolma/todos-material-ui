import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { links, SideMenu } from "./navigation";

import { StylesProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";

import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";

const customTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={customTheme}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
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
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;

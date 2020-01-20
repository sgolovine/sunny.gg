import React from "react";
import { AppContainer } from "./containers/AppContainer";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Resume from "./pages/Resume";

export default () => (
  <AppContainer>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </Switch>
    </BrowserRouter>
  </AppContainer>
);

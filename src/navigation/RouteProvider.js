import React from "react";
import { Route, Switch } from "react-router-dom";
import Root from "../screens/Root";

const Navigation = () => (
  <Switch>
    <Route exact path="/" component={Root} />
  </Switch>
);

export default Navigation;

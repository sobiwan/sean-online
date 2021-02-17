import React from "react";
import { Route, Switch } from "react-router-dom";
import Demo from "../components/screens/Demo";

const Navigation = () => (
  <Switch>
    <Route exact path="/" component={Demo} />
  </Switch>
);

export default Navigation;

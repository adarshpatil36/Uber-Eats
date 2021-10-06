import React from "react";
import Login from "./Login";
import { Dashboard } from "./Dashboard";
import Signup from "./Signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Restaurant from "./Restaurant";

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/restaurant" component={Restaurant} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;

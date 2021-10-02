import React from "react";
import Login from "./Login";
import { Dashboard } from "./Dashboard";
import Signup from "./Signup";
import { Route } from "react-router";

const Root = () => {
  return (
    <>
      {/*Render Different Component based on Route*/}
      <Route path="/" exact component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
    </>
  );
};

export default Root;

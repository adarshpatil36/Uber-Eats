import React from "react";
import Login from "./Login";
import { Dashboard } from "./Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Restaurant from "./Restaurant";
import OrderItem from "./OrderItem";
import { PastOrders } from "./PastOrders";
import InfoForms from "./InfoForms";
import CustomerSignup from "./CustomerSignup";
import RestaurantSignup from "./RestaurantSignup";

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        {/* <Route path="/signin" component={Login} /> */}
        <Route path="/resSignup" component={RestaurantSignup} />
        <Route path="/userSignup" component={CustomerSignup} />
        {/* <Route path="/signup" component={Signup} /> */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/restaurant" component={Restaurant} />
        <Route path="/orders" component={OrderItem} />
        <Route path="/pastOrders" component={PastOrders} />
        <Route path="/restaurantDetails" component={InfoForms} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;

import React from "react";
import { Route } from "react-router";
import * as Containers from "./containers/ index";
import { NotFound } from "./components";

export default (
  <Route path="/" component={Containers.HomePage}>
    <Route path="/products" component={Containers.ProductsPage} />
    <Route path="*" component={NotFound} />
  </Route>
);

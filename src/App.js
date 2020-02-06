import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import store from "./store";
import Clients from './containers/Clients/Clients';
import * as Containers from "./containers/ index";
import { NotFound } from "./components";
import Home from "./containers/Home/Home"
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Router>

        <Route exact path="/" render={() => {
          return (
            <Redirect to="/home" />
          );
        }} />

        <Route exact path="/home" render={() => {
          return (
            <Clients>
              <Home />
            </Clients>
          );
        }} />

      </Router>
    </Provider>
  );
}

export default App;

import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import store from "./store";
import * as Containers from "./containers/ index";
import { NotFound } from "./components";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/not-found">Not found</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route exact path="/" component={Containers.HomePage} />
            <Route path="/products" component={Containers.ProductsPage} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

import React from "react";
import "./App.scss";
import { Auth } from "./components/Auth/Auth";
import { NavigationBar } from "./components/Navigation/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { history } from "./helpers/history";
import { HomePage } from "./components/Home/HomePage";
import { Product } from "./components/Product/Product";

function App() {
  return (
    <React.Fragment>
      <Router history={history}>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={Auth} />
          <Route path="/register" component={Auth} />
          <Route path="/product" component={Product} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

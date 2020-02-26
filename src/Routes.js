import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from ".Pages/Main/Main.js";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.js";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/product-detail" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

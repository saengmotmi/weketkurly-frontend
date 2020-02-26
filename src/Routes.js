import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.js";
import Join from "./Pages/Join/Join";
import Main from "./Pages/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/product-detail" component={ProductDetail} />
          <Route exact path="/Join" component={Join} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

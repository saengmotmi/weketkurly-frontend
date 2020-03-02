import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JoinComplete from "./Pages/JoinComplete/JoinComplete";
import Main from "./Pages/Main/Main";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.js";
import Join from "./Pages/Join/Join";
import Login from "./Pages/Login/Login";
import CategoryView from "./Pages/CategoryView/CategoryView";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/joinComplete" component={JoinComplete} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/product-detail" component={ProductDetail} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/categoryView" component={CategoryView} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

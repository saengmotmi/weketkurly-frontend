import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JoinComplete from "./Pages/JoinComplete/JoinComplete";
import Main from "./Pages/Main/Main";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.js";
import Join from "./Pages/Join/Join";
import Login from "./Pages/Login/Login";
import ItemCart from "./Pages/ItemCart/ItemCart";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/JoinComplete" component={JoinComplete} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/product-detail" component={ProductDetail} />
          <Route exact path="/Join" component={Join} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/itemcart" component={ItemCart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

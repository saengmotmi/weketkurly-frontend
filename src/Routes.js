import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./Pages/Detail/Detail.js";
import Join from "./Pages/Join/Join";
import JoinComplete from "./Pages/JoinComplete/JoinComplete";
import Main from "./Pages/Main/Main";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import EventMain from "./Pages/EventMain/EventMain";
import Login from "./Pages/Login/Login";
import Order from "./Pages/Order/Order";
import OrderList from "./Pages/OrderList/OrderList";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/JoinComplete" component={JoinComplete} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/eventmain" component={EventMain} />
          <Route exact path="/Join" component={Join} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/orderlist" component={OrderList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

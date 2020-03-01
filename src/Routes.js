import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./Pages/Detail/Detail.js";
import Join from "./Pages/Join/Join";
import Main from "./Pages/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/Join" component={Join} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

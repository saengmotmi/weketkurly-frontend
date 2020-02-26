import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main.js";
import JoinComplete from "./Pages/JoinComplete/JoinComplete";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/JoinComplete" component={JoinComplete} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

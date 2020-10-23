import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./containers/Home/Home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;

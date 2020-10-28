import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./containers/Home/Home";
import Form from "./containers/Form/Form";
import "./index.module.sass"

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/form/:id" component={Form} />
        </Switch>
      </Router>
    );
  }
}

export default App;

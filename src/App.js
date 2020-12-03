import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Home from "./containers/Home/Home";
import Form from "./containers/Form/Form";
import "./index.module.sass";
import Verify from "./containers/Verify/Verify";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/form/" exact component={Form}>
            <Redirect to="/form/1" />
          </Route>
          <Route path="/form/:id" component={Form} />
          <Route path="/verify" component={Verify} />
        </Switch>
      </Router>
    );
  }
}

export default App;

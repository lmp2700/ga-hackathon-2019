import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginContainer from "./Containers/MainContainers/LoginContainer";
import MainContainer from "./Containers/MainContainers/MainContainer";
import SearchContainer from "./Containers/MainContainers/SearchContainer";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginContainer} />
            <Route exact path="/profile" component={MainContainer} />
            <Route exact path="/search" component={SearchContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

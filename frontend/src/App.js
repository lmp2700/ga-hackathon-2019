import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from './Containers/MainContainers/MainContainer';
import LoginContainer from './Containers/MainContainers/LoginContainer';
import SearchContainer from './Containers/MainContainers/SearchContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/searc" component={SearchContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

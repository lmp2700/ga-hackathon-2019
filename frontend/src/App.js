import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginContainer from './Containers/MainContainers/LoginContainer';
import MainContainer from './Containers/MainContainers/MainContainer';
import SearchContainer from './Containers/MainContainers/SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/search" component={SearchContainer} />
            <h1>Main Container</h1>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginContainer from './Containers/MainContainers/LoginContainer';
import MainContainer from './Containers/MainContainers/MainContainer';
import SearchContainer from './Containers/MainContainers/SearchContainer';
import FriendsContainer from './Containers/UserContainers/FriendsList';
import ChatBox from './Containers/ChatContainer/ChatContainer'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/search" component={SearchContainer} />
            <Route exact path="/friendslist" component={FriendsContainer} />
            <Route exact path="/chat" component={ChatBox} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

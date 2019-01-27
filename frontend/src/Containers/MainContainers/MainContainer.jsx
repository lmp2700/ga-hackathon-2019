import React, { Component } from "react";
import NavigationContainer from "./NavigationContainer";
import HavesContainer from "../ThingsContainers/HavesContainer";
import WantsContainer from "../ThingsContainers/WantsContainer";
import UserEditContainer from "../UserContainers/UserEdit";
import ChatContainer from '../ChatContainer/ChatContainer'

class MainContainer extends Component {
  render() {
    return (
      <main className="main">
        <div className="content">
          <UserEditContainer />
          <HavesContainer />
          <WantsContainer />
          <ChatContainer />
          <NavigationContainer />
        </div>
      </main>
    );
  }
}

export default MainContainer;

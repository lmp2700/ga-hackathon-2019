import React, { Component } from "react";
import LoginContainer from "./LoginContainer";
import SearchContainer from "./SearchContainer";
import NavigationContainer from "./NavigationContainer";
import HavesContainer from "../ThingsContainers/HavesContainer";
import WantsContainer from "../ThingsContainers/WantsContainer";
import UserEditContainer from "../UserContainers/UserEdit";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <UserEditContainer />
        <HavesContainer />
        <WantsContainer />
        <NavigationContainer />
      </div>
    );
  }
}

export default MainContainer;

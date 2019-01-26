import React, { Component } from 'react';
import LoginContainer from './LoginContainer';
import SearchContainer from './SearchContainer';
import NavigationContainer from './NavigationContainer';
import HavesContainer from '../ThingsContainers/HavesContainer';
import WantsContainer from '../ThingsContainers/WantsContainer';

class MainContainer extends Component {
    render() {
        return (
            <div>
                <LoginContainer />
                <SearchContainer />
                <h1>Main User Container Here</h1>
                <HavesContainer />
                <WantsContainer />
                <NavigationContainer />
            </div>
        )
    }

}

export default MainContainer;
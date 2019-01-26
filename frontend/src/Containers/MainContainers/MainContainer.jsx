import React, { Component } from 'react';
import LoginContainer from './LoginContainer';
import SearchContainer from './SearchContainer';
import NavigationContainer from './NavigationContainer';

class MainContainer extends Component {
    render() {
        return (
            <div>
                <LoginContainer />
                <SearchContainer />
                <h1>Main Container Here</h1>
                <NavigationContainer />
            </div>
        )
    }

}

export default MainContainer;
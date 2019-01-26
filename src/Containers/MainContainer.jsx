import React, { Component } from 'react';
import LoginContainer from './LoginContainer'
import SearchContainer from './SearchContainer'

class MainContainer extends Component {
    render() {
        return (
            <div>
                <LoginContainer />
                <h1>Main Container Here</h1>
                <SearchContainer />
            </div>
        )
    }
}

export default MainContainer;
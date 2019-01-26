import React, { Component } from 'react';

class NavigationContainer extends Component {
    render() {
        return (
            <div>
                <ul>
                    <a href="#">Home</a> &nbsp;
                    <a href="#">Search</a> &nbsp;
                    <a href="#">Chat</a> &nbsp;
                    <a href="#">Friends</a>
                </ul>
            </div>
        )
    }
}

export default NavigationContainer;
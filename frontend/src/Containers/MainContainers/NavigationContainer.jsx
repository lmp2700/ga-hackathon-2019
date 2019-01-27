import React, { Component } from 'react';

class NavigationContainer extends Component {
    render() {
        return (
            <div className="box navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Search</a></li>
                    <li><a href="/">Chat</a></li>
                    <li><a href="/">Friends</a></li>
                </ul>
            </div>
        )
    }
}

export default NavigationContainer;
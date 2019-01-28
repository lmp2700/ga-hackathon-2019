import React, { Component } from 'react';
import home from '../../images/icon_home.svg';
import search from '../../images/icon_search.svg';
import chat from '../../images/icon_chat.svg';
import friends from '../../images/icon_friends.svg';

class NavigationContainer extends Component {
    render() {
        return (
            <div className="box navigation">
                <ul>
                    <li><a href="/"><img src={home} alt="home" /></a></li>
                    <li><img src={search} alt="search"></img></li>
                    <li><a href="/chat"><img src={chat} alt="chat" /></a></li>
                    <li><a href="/friends"><img src={friends} alt="friends" /></a></li>
                </ul>
            </div>
        )
    }
}

export default NavigationContainer;
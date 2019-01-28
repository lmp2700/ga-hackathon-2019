import React, { Component } from 'react'

class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            friendName: ''
        }
    }
    render() {
        return (
            <div>
                <h2>List of Friends</h2>
                <ul>
                    <li>Friend 1</li>
                    <li>Friend 2</li>
                    <li>Friend 3</li>
                    <li>Friend 4</li>
                    <li>Friend 5</li>
                </ul>
            </div>
        )
    }
}

export default FriendsList;
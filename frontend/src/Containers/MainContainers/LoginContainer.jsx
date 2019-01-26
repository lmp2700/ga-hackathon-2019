import React, { Component } from 'react';

class LoginContainer extends Component {
    render() {
        return (
            <div>
                Username: <input placeholder="username" />
                Password: <input placeholder="password" />
            </div>
        )
    }
}

export default LoginContainer;
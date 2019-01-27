import React, { Component } from "react";
import GoogleLogin from "react-google-login";

const googleResponse = response => {
  console.log(response);
};

class LoginContainer extends Component {
  render() {
    return (
      <GoogleLogin
        clientId="172502702779-bcdta2avnhivtd5q7hpn0f6r802j57q5.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={googleResponse}
        onFailure={googleResponse}
      />
    );
  }
}

export default LoginContainer;

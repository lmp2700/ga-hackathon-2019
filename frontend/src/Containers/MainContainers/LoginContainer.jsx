import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const googleResponse = response => {
  if (response.error === "popup_closed_by_user") {
    history.push("/profile");
    window.location.reload();
  }
  //   console.log(response);
};

class LoginContainer extends Component {
  render() {
    return (
      <GoogleLogin
        clientId="172502702779-bcdta2avnhivtd5q7hpn0f6r802j57q5.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={googleResponse}
        onFailure={googleResponse}
      />
    );
  }
}

export default LoginContainer;

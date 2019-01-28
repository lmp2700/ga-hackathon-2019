import React, { Component } from "react";
import logo from '../../images/logo_LOTs.svg';
const imageSize = {
  width: "50px",
  height: "50px"
};

class UserEditContainer extends Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
  }

  render() {
    return (
      <main>
        <div className="box user">
          <div className="lots-logo">
            <img src={logo} alt="logo" />
          </div>
          <img
            src="https://png.pngtree.com/svg/20161027/service_default_avatar_182956.png"
            alt="Default user avatar"
            style={imageSize}
          />
          <label className="title">Court</label>
          <hr />
        </div>
      </main>
    );
  }
}

export default UserEditContainer;

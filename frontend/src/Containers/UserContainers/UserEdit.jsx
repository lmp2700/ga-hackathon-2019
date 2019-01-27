import React, { Component } from "react";
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
      <div className="box user">
        <img
          src="https://png.pngtree.com/svg/20161027/service_default_avatar_182956.png"
          alt="Default user avatar"
          style={imageSize}
        />
        <label className="title">Court</label>
        <hr />
      </div>
    );
  }
}

export default UserEditContainer;

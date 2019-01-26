import React, { Component } from "react";

class HavesContainer extends Component {
  constructor() {
    super();
    this.state = {
      haves: ""
    };
  }

  render() {
    const haves = ["Pasta Maker", "Pitchfork", "Snowshoes", "Movie Projector"];

    return (
      <div>
        <h1>Lending</h1>
        <ul>
          {haves.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default HavesContainer;

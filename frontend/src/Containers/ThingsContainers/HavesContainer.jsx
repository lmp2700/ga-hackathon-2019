import React, { Component } from "react";
import ThingContainer from "./ThingContainer";

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
            return <ThingContainer value={value} index={index} />;
          })}
        </ul>
      </div>
    );
  }
}

export default HavesContainer;

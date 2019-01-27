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
      <div className="box lists">
        <label className="title">Lending</label>
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

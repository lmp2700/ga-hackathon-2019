import React, { Component } from "react";
import ThingContainer from "./ThingContainer";

class WantsContainer extends Component {
  constructor() {
    super();
    this.state = {
      wants: ""
    };
  }
  render() {
    const wants = [
      "Book",
      "Movie",
      "CD",
      "Bike",
      "Purse",
      "Belt",
      "Garlic Press",
      "Potato Masher",
      "Pressure Cooker"
    ];

    return (
      <div className="box lists">
        <label className="title">Borrowing</label>
        <ul>
          {wants.map((value, index) => {
            return <ThingContainer value={value} index={index} />;
          })}
        </ul>
      </div>
    );
  }
}

export default WantsContainer;

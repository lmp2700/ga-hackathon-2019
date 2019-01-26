import React, { Component } from "react";

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
      <div>
        <h1>Borrowing</h1>
        <ul>
          {wants.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default WantsContainer;

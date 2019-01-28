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
<<<<<<< HEAD
      <main>
        <div className="box lists">
          <label className="title">Borrowing</label>
          <ul>
            {wants.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
          <div>
            <form>
              <label className="search-bar">Search:</label><input placeholder="what do you want?"></input>
              <br />
              <button>Want Now</button>
            </form>
          </div>
        </div>
      </main>
=======
      <div className="box lists">
        <label className="title">Borrowing</label>
        <ul>
          {wants.map((value, index) => {
            return <ThingContainer value={value} index={index} />;
          })}
        </ul>
      </div>
>>>>>>> 549717c368bc6d7924335f3c73c8f87793eb7e54
    );
  }
}

export default WantsContainer;

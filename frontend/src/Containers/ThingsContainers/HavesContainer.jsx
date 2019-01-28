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
      <main>
        <div className="box lists">
          <label className="title">Lending</label>
          <ul>
            {haves.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
          <div>
            <form>
              <label className="search-bar">Search:</label><input placeholder="what do you have?"></input>
              <br />
              <button>I Have</button>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default HavesContainer;

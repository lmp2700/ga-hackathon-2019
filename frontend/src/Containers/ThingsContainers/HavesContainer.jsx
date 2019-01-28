import React, { Component } from "react";
import ThingContainer from "./ThingContainer";

class HavesContainer extends Component {
  constructor() {
    super();
    this.state = {
      haves: ""
    };
  }

  // componentDidMount() {
  //   this.props.getHaves()
  // }

  render() {
    const haves = ["Pasta Maker", "Pitchfork", "Snowshoes", "Movie Projector"];

    return (
<<<<<<< HEAD
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
=======
      <div className="box lists">
        <label className="title">Lending</label>
        <ul>
          {haves.map((value, index) => {
            return <ThingContainer value={value} index={index} />;
          })}
        </ul>
      </div>
>>>>>>> 549717c368bc6d7924335f3c73c8f87793eb7e54
    );
  }
}

export default HavesContainer;

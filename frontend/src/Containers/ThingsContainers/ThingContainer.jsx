import React from "react";

function ThingContainer({ value, index }) {
  return (
    <div>
      <li key={index}>{value}</li>
      <button>/</button>
      <button>X</button>
    </div>
  );
}

export default ThingContainer;

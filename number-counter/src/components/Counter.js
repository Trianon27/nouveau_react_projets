import React from "react";
import "../stylesheets/Counter.css";

function Counter({ clicks }) {
  return (
    <div className="counter">
      <p>{clicks}</p>
    </div>
  );
}

export default Counter;
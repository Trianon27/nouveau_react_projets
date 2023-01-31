import React from "react";
import "../stylesheets/Counter.css";

class Counter extends React.Component{
  render(){

    return (
      <div className="counter">
        <p>{this.props.clicks}</p>
      </div>
    );
  }
};



export default Counter;
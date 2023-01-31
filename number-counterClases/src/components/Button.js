import React from "react";
import "../stylesheets/Button.css";

class Button extends React.Component{
    render(){
        return (
            <button 
            className={ this.props.clicbutton ? "clicbutton" : "restartbutton" }
            onClick={this.props.manageClick}>
                {this.props.text}
            </button>
        )
    }
};



export default Button;
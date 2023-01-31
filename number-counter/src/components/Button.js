import React from "react";
import "../stylesheets/Button.css";

function  Button({ text, clicbutton, manageClick }) {
    return (
        <button 
        className={ clicbutton ? "clicbutton" : "restartbutton" }
        onClick={manageClick}>
            {text}
        </button>
    )

}

export default Button;
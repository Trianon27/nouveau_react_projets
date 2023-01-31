import React from "react";
import "../stylesheets/Testimony.css";

function Testimony(props) {
    return(
        <div className="testimony-container">
            <img className="testimony-image"
            src={require( `../images/testimonio-${props.peopleTestimony.image}.png`)}
            alt="Emma-face"/>
            <div className="text-testimony-container">
                <p className="testimony-name">
                    <strong>{props.peopleTestimony.name}</strong> in {props.peopleTestimony.country}
                </p>
                <p className="charge-testimony">
                    {props.peopleTestimony.charge} at <strong>{props.peopleTestimony.company}</strong>
                </p>
                <p className="testimony-text">
                    "{props.peopleTestimony.testimony}"
                </p>
            </div>
        </div>
    ); 
}

export default Testimony;

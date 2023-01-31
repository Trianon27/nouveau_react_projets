import React from "react";
import "../stylesheets/Testimony.css";


class Testimony extends React.Component {
    render(){

        return(
            <div className="testimony-container">
                <img className="testimony-image"
                src={require( `../images/testimonio-${this.props.peopleTestimony.image}.png`)}
                alt={`Foto de ${this.props.peopleTestimony.name}`} />
                <div className="text-testimony-container">
                    <p className="testimony-name">
                        <strong>{this.props.peopleTestimony.name}</strong> in {this.props.peopleTestimony.country}
                    </p>
                    <p className="charge-testimony">
                        {this.props.peopleTestimony.charge} at <strong>{this.props.peopleTestimony.company}</strong>
                    </p>
                    <p className="testimony-text">
                        "{this.props.peopleTestimony.testimony}"
                    </p>
                </div>
            </div>
        ); 
    }
};


export default Testimony;

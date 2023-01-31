import React from "react";
import '../stylesheets/Logo.css';


function Logo(props){
    return(
        <div className='freecodecamp-logo-container'>
        <img 
        src={props.image} 
        className='freecodecamp-logo'
        alt='freeCodeCamp logo' />
      </div>
    );
}

export default Logo;
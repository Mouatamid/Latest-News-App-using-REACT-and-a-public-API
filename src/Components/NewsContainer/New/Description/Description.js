import React from 'react';
import './Description.css';

function Description(props){
    return(
        <p className="new-description">{props.text}</p>
    )
}

export default Description;
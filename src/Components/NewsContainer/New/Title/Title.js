import React from 'react';
import './Title.css';

function Title(props){
    return(
    <h2 className="new-title">{props.title}</h2>
    )
}

export default Title;
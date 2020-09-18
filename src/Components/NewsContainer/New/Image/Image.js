import React from 'react';
import './Image.css';

function Image(props){
    const source = props.src==="None" ? "https://sawahhost.com/wp-content/uploads/2020/06/breaking-4.png" : props.src ;
    return(
        <img src={source} className="new-image" />
    )
}

export default Image;
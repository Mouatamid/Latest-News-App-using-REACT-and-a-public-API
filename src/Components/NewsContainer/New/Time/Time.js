import React from 'react';
import './Time.css';

function Time(props){
    let time = props.time;

    return(
        <span className="new-time">{time}</span>
    )
}

export default Time;
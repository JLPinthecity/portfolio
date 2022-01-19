import React from 'react'
import './Burger.css';

function Burger(props) {

    let toggleClass = 'toggle-button';
    if (props.show) {
        toggleClass = 'toggle-button open'
    }
    return (
        <button className={toggleClass} onClick={props.click}>
            <div className="toggle-button__line" id="line1"/>
            <div className="toggle-button__line" id="line2"/>  
            <div className="toggle-button__line" id="line3"/>
        </button>
    )
}

export default Burger;



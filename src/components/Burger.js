import React from 'react'
import './Burger.css';

function Burger(props) {
    return (
        <button className="toggle-button" onClick={props.click}>
            <div className="toggle-button__line" id="color1"/>
            <div className="toggle-button__line" id="color2"/>  
            <div className="toggle-button__line" id="color3"/>
        </button>
    )
}

export default Burger;



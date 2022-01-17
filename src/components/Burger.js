import React from 'react'
import './Burger.css';

function Burger() {
    return (
        
    <button className="toggle-button">
        <div className="toggle-button__line" id="color1"/>
        <div className="toggle-button__line" id="color2"/>  
        <div className="toggle-button__line" id="color3"/>
    </button>
    )
}

export default Burger;



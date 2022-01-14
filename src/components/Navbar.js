import React from "react";
import './Navbar.css';
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className="wrapper">

            <div className="nav">

                <div className="header">
                    <img src={require('../logos/biegeandwhite.png')} className="title" alt="joann pan logo"/>

                    <div className="menu_icon">
                        <AiOutlinePlus/>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Navbar;
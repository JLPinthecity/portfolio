import React from "react";
import Burger from "./Burger";
import './Header.css';
import './Burger.css';

const Header = (props) => {
    
    return (
        <div className="nav">
            <div className="header">
                <a href="/"><img src={require('../logos/stacked.png')} className="title" alt="joann pan logo"/></a>

                <Burger className="burger_icon" click={props.clickMenuIcon} show={props.show}/>

            </div>
        </div>
    )
}

export default Header;




// <AiOutlinePlus onClick={showSidebar} />


//   {/* <nav className="side">
//                 <Sidebar className="hide" toggle={showSidebar} sidebar={sidebar}/>
//             </nav> */}
import React, { useState } from "react";
// import Sidebar from "./Sidebar";
import Burger from "./Burger";
import './Header.css';
import './Sidebar.css';
import './Burger.css';

const Header = () => {
    
    const [sidebar, setSidebar] = useState(false) 

    const showSidebar = () => setSidebar(!sidebar)

    return (

        <div className="nav">

            <div className="header">


                <a href="/"><img src={require('../logos/biegeandwhite.png')} className="title" alt="joann pan logo"/></a>

                
                <Burger className="burger_icon"/> 
            </div>


        </div>
    )
}

export default Header;




// <AiOutlinePlus onClick={showSidebar} />


//   {/* <nav className="side">
//                 <Sidebar className="hide" toggle={showSidebar} sidebar={sidebar}/>
//             </nav> */}
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Sidebar from "./Sidebar";
import './Header.css';
import './Sidebar.css';


const Header = () => {
    
    const [sidebar, setSidebar] = useState(false) 

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div className="wrapper">

            <div className="nav">

                <div className="header">
                    <img src={require('../logos/biegeandwhite.png')} className="title" alt="joann pan logo"/>

                    <div className="menu_icon">
                        <AiOutlinePlus onClick={showSidebar}/>
                    </div>

                    <nav className={sidebar ? 'nav-menu' : 'hide'}>
                        <Sidebar/>
                    </nav>

                </div>

            </div>
            
        </div>
    )
}

export default Header;
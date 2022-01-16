import React from 'react';
import "./Sidebar.css";
import { SidebarContent } from './SidebarContent';
import { AiOutlineClose } from "react-icons/ai";

function Sidebar(props) {

    const menuItems = SidebarContent.map((item, key) => {
        return (
            <li key={key} className="item" onClick={()=> {window.location.pathname = item.link}}>
                <div>
                    {item.title}
                </div>
            </li>
        )
    })

    return (
        <div className="sidebar_wrapper">

            <div className="container">

                <div className="first_row">
                    <img src={require('../logos/hithere.png')} className="hi" alt="hi there greeting inside menu sidebar"/>

                    <AiOutlineClose className="close" onClick={props.toggle}/>
                </div>

                <div className="main">
                    <ul>
                        {menuItems}
                    </ul>
                </div>

                <div className="last">
                    <img src={require('../logos/jp-circle.png')} className="jp" alt="small joann pan logo inside menu sidebar"/>

                    <img src={require('../logos/toodles.png')} className="toodles" alt="toodles above close inside menu sidebar" onClick={props.toggle}/>
                </div>

               
                    
    
        
            </div>
        </div>
    )
}

export default Sidebar;

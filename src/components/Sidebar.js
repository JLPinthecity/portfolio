import React from 'react';
import { SidebarContent } from './SidebarContent';
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar(props) {

    const menuItems = SidebarContent.map((item, key) => {
        return (
            <li key={key} className="item">
                <div>
                <Link to={item.link}>{item.title}</Link>
                </div>
            </li>
        )
    })


    let sidebarClass = 'sidebar_wrapper';
    if (props.show) {
        sidebarClass = 'sidebar_wrapper open'
    }

    return (
        <div className={sidebarClass}>

            <div className="main">

                <ul>
                    {menuItems}
                </ul>
            
            </div>
        </div>
    )
}

export default Sidebar;


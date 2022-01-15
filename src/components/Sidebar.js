import React from 'react';
import "./Sidebar.css";
import { SidebarContent } from './SidebarContent'

function Sidebar() {

    const menuItems = SidebarContent.map((item, key) => {
        return (
            <li key={key} onClick={()=> {window.location.pathname = item.link}}>
                <div>
                    {item.title}
                </div>
            </li>
        )
    })


    return (
        <div className="sidebar">
            <ul>
                {menuItems}
            </ul>
        </div>
    )
}

export default Sidebar

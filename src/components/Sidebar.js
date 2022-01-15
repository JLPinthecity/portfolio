import React from 'react';
import "./Sidebar.css";
import { SidebarContent } from './SidebarContent'

function Sidebar() {

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
        <div className="sidebar">
            <ul className="sidebar_list">
                {menuItems}
            </ul>

            <img src={require('../logos/pink-circle.png')} className="circle" alt="small joann pan logo inside menu sidebar"/>

        </div>
    )
}

export default Sidebar

import React from 'react';
import "./Sidebar.css";
import { SidebarContent } from './SidebarContent';
import { AiOutlineClose } from "react-icons/ai";


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
        <div className="wrapper">
            <AiOutlineClose/>

            <div className="sidebar">
                <ul className="sidebar_list">
                    {menuItems}
                </ul>

                <img src={require('../logos/logo.png')} className="circle" alt="small joann pan logo inside menu sidebar"/>

            </div>
        </div>
    )
}

export default Sidebar

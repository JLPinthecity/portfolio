import React from 'react';
import { SidebarContent } from './SidebarContent';
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Burger from "./Burger";
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

            <div className="container">

                <div className="first_row" >
                    <img src={require('../logos/hithere.png')} className="hi" alt="hi there greeting inside menu sidebar"/>

                    <Burger/>
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

import React from "react";
import { SidebarContent } from "./SidebarContent";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar(props) {
  const menuItems = SidebarContent.map((item, key) => {
    return (
      <li key={key} className="item">
        <div>
          <Link to={item.link} onClick={props.clickMenuIcon}>
            {item.title}
          </Link>
        </div>
      </li>
    );
  });

  let sidebarClass = "sidebar_wrapper hide";
  if (props.show) {
    sidebarClass = "sidebar_wrapper open";
  }

  return (
    <div className={sidebarClass}>
      <div className="content-container">
        <ul>{menuItems}</ul>
      </div>
    </div>
  );
}

export default Sidebar;

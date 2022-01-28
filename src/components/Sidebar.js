import React, { useEffect } from "react";
import { SidebarContent } from "./SidebarContent";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar(props) {
  const { show } = props;

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
  if (show) {
    sidebarClass = "sidebar_wrapper open";
  }

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);

  return (
    <div className={sidebarClass}>
      <div className="content-container">
        <ul>{menuItems}</ul>
      </div>
    </div>
  );
}

export default Sidebar;

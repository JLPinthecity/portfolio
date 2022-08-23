import React, { useEffect } from "react";
import { SidebarContent } from "./SidebarContent";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import "./Sidebar.css";

function Sidebar(props) {
  const { show, click } = props;

  const menuItems = SidebarContent.map((item, key) => {
    return (
      <li key={key} className="item">
        <div>
          <Link to={item.link} onClick={click}>
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
        <div className="close-container">
          <AiOutlineClose onClick={click} />
        </div>
        <ul>{menuItems}</ul>
      </div>
    </div>
  );
}

export default Sidebar;

// passed from layout to header: clickMenuIcon={showSidebar} show={sidebar}
// passed from header to sidebar click={clickMenuIcon} show={show}

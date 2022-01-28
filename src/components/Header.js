import React from "react";
import Burger from "./Burger";
import Sidebar from "./Sidebar";
import { useState } from "react";

import "./Header.css";
import "./Burger.css";
import "./Sidebar.css";

const Header = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="nav">
      <div className="header">
        <a href="/">
          <img
            src={require("../logos/stacked.png")}
            className="title"
            alt="joann pan logo"
          />
        </a>

        <Burger
          className="burger_icon"
          click={props.clickMenuIcon}
          show={props.show}
        />
      </div>

      <div className="sidebar">
        <Sidebar
          className="sidebar"
          clickMenuIcon={showSidebar}
          show={sidebar}
        />
      </div>

      <p></p>
    </div>
  );
};

export default Header;

// <AiOutlinePlus onClick={showSidebar} />

//   {/* <nav className="side">
//                 <Sidebar className="hide" toggle={showSidebar} sidebar={sidebar}/>
//             </nav> */}

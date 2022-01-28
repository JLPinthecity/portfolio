import React from "react";
import Burger from "./Burger";
import Sidebar from "./Sidebar";
import "./Header.css";
import "./Burger.css";

const Header = (props) => {
  const { show, clickMenuIcon } = props;

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

        <Burger className="burger_icon" click={clickMenuIcon} show={show} />
      </div>

      <div className="sidebar">
        <Sidebar className="sidebar" click={clickMenuIcon} show={show} />
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

// passed from layout to header: clickMenuIcon={showSidebar} show={sidebar}
// passed from header to sidebar click={clickMenuIcon} show={show}

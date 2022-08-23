import React from "react";
import Burger from "./Burger";
import Sidebar from "./Sidebar";
import "./Header.css";
import "./Burger.css";

const Header = (props) => {
  const { show, clickMenuIcon } = props;

  return (
    <div className="header-container">
      <div className="header-main">
        <a href="/">Joann Pan</a>

        <Burger className="burger_icon" click={clickMenuIcon} show={show} />
      </div>

      <div className="sidebar">
        <Sidebar className="sidebar" click={clickMenuIcon} show={show} />
      </div>
    </div>
  );
};

export default Header;

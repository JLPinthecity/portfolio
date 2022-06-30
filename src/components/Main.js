import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="home-container">
      <div className="home-main">
        <div className="left-side">
          <div className="image-placeholder">
            <img
              src={require("../images/joann.jpeg")}
              alt="joann pan portrait"
            />
          </div>
        </div>

        <div className="right-side">
          <div className="summary">
            Hi there! I'm Joann, a full-stack developer and content creator
            based in NYC.
          </div>

          <div className="skills">
            <div className="header1">
              <h2>CODE</h2>
              <div className="details">
                HTML/CSS | Ruby | Rails | JavaScript | React | Redux
              </div>
            </div>

            <div className="header2">
              <h2>CONTENT</h2>
              <div className="details">
                Content creation | digital content strategy | editing
              </div>
            </div>
          </div>

          <div className="button-wrapper">
            <Link to="/about">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

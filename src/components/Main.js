import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="main-container">
      <div className="main-wrapper">
        <div className="image-placeholder">
          <img src={require("../images/joann.jpeg")} alt="joann pan portrait" />
        </div>

        <div className="right-side">
          <div className="hi">Hi! Let's chat.</div>

          <div className="summary">
            I'm Joann Pan, a full-stack developer and content creator based in
            NYC.
          </div>

          <div className="skills">
            <div className="type">Code</div>
            <div className="details">
              HTML/CSS | Ruby | Rails | JavaScript | React | Redux
            </div>
          </div>
          <div className="skills">
            <div className="type">Content</div>
            <div className="details">
              Content creation | digital content strategy | editing
            </div>
          </div>

          <div className="button">
            <div className="button-wrapper">
              <Link to="/about">Learn more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

import React from "react";
import "./Code.css";
import "./About.css";

function Code() {
  return (
    <div className="projects-container">
      <div className="project-main">
        <div className="title-row">
          <div className="title">HorrorFlix</div>

          <div className="project-link link">
            <a
              href="https://scarymovies.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              scarymovies.netlify.app
            </a>
          </div>
        </div>

        <br />
        <br />

        <div className="overview">
          HorrorFlix is a React horror-movie reviews site built with a Rails
          backend. All state is managed with Redux as a single source of truth.
        </div>

        <br />
        <br />

        <div className="project-shots">
          <div className="mobile">
            <img
              src={require("../images/horrorflix-mobile.jpg")}
              alt="screenshot of horrorflix project in smaller mobile size"
            />
          </div>

          <div className="desktop">
            <img
              src={require("../images/horrorflix-desktop.jpg")}
              alt="screenshot of horrorflix project in desktop mode"
            />
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="project">
        <div className="title-row">
          <div className="title">Compact</div>

          <div className="project-link link">
            <a
              href="https://github.com/JLPinthecity/compact_frontend"
              target="_blank"
              rel="noreferrer"
            >
              *Live link to come*
            </a>
          </div>
        </div>

        <br />
        <br />

        <div className="overview">
          Compact is a gear planner built for thru-hikers that automatically
          calculates a pack's base weight as the user adds or eliminates items
          from their virtual pack. The front-end was built using React and Redux
          with a Rails API backend.
        </div>

        <br />
        <br />

        <div className="project-shots">
          <div className="mobile">
            <img
              src={require("../images/add-gear.jpg")}
              alt="screenshot of compact gear list project in smaller mobile size"
            />
          </div>

          <div className="desktop">
            <img
              src={require("../images/desktop.jpg")}
              alt="screenshot of compact gear list project in desktop mode"
            />
          </div>
        </div>
      </div>

      <br></br>
      <br></br>

      <div className="prompt">
        For more projects, check out my{" "}
        <a
          href="https://github.com/JLPinthecity"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        .
      </div>

      <br></br>
      <br></br>
    </div>
  );
}

export default Code;

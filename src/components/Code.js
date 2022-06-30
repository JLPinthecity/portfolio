import React from "react";
import "./Code.css";
import "./About.css";

function Code() {
  return (
    <div className="projects-container">
      <div className="projects-main">
        <div className="project-showcase">
          <div className="title-row">
            <div className="project-title">Compact</div>

            <div className="project-link link">
              <a
                href="http://compacthike.com/"
                target="_blank"
                rel="noreferrer"
              >
                http://compacthike.com
              </a>
            </div>
          </div>

          <div className="overview">
            Compact is a gear planner built for thru-hikers that automatically
            calculates a pack's base weight as the user adds or eliminates items
            from their virtual pack. The front-end was built using React and
            Redux with a Rails API backend.
          </div>

          <div className="project-shots">
            <div className="mobile">
              <img
                src={require("../images/tablet.png")}
                alt="screenshot of compact gear list project in desktop mode"
              />
            </div>

            <div className="desktop">
              <img
                src={require("../images/big.png")}
                alt="screenshot of compact gear list project in desktop mode"
              />
            </div>
          </div>
        </div>

        <br></br>
        <br></br>

        <div className="project-showcase">
          <div className="title-and-url-section">
            <div className="project-title">HorrorFlix</div>
            <div className="project-link">
              <a
                href="https://scarymovies.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                scarymovies.netlify.app
              </a>
            </div>
          </div>

          <div className="overview">
            HorrorFlix is a React horror-movie reviews site built with a Rails
            backend. All state is managed with Redux as a single source of
            truth.
          </div>

          <div className="project-shots">
            <div className="mobile">
              <img
                src={require("../images/horrorflix-mobile.jpg")}
                alt="screenshot of horrorflix project in smaller mobile size"
              />
            </div>

            <div className="desktop">
              <img
                src={require("../images/horrorflix-desktop.png")}
                alt="screenshot of horrorflix project in desktop mode"
              />
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
}

export default Code;

import React from "react";
import "./Code.css";
import "./About.css";

function Code() {
  return (
    <div className="projects-container">
      <div className="projects-wrapper">
        <div className="project-showcase">
          <div className="title-row">
            <div className="project-title">Abortion Rights by State</div>

            <div className="project-link link">
              <a
                href="https://abortionrightsbystate.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://abortionrightsbystate.com/
              </a>
            </div>
          </div>

          <div className="overview">
            Abortion Rights by State is a tool anyone can use to familiarize
            themselves with abortion rights in any state. State laws are
            populated programmatically from the Abortion Policy API. The project
            was built with Next.js and React.
          </div>

          <div className="project-shots">
            <div className="desktop">
              <img
                src={require("../images/desktop-abortion-rights-main.png")}
                alt="screenshot of compact gear list project in desktop mode"
              />
            </div>

            <div className="desktop">
              <img
                src={require("../images/desktop-abortion-rights.png")}
                alt="screenshot of compact gear list project in desktop mode"
              />
            </div>

            <div className="mobile">
              <img
                src={require("../images/mobile-abortion-rights.png")}
                alt="screenshot of Abortion Rights by State website in desktop mode"
              />
            </div>
          </div>
        </div>

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
                src={require("../images/compact-mobile.png")}
                alt="screenshot of compact gear list project in desktop mode"
              />
            </div>

            <div className="desktop">
              <img
                src={require("../images/desktop-compact-main.png")}
                alt="screenshot of compact gear list project in desktop mode"
              />
            </div>

            <div className="desktop">
              <img
                src={require("../images/desktop-compact.png")}
                alt="screenshot of compact gear list project in desktop mode"
              />
            </div>
          </div>
        </div>

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

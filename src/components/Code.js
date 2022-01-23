import React from "react";
import { Link } from "react-router-dom";

function Code() {
  return (
    <div className="projects-wrapper">
        <div className="projects-container">

            <div className="project">
                <div className="title">HorrorFlix</div>

                <div className="text">
                    <Link to="https://scarymovies.netlify.app/">HorrorFlix</Link>
                </div>

                <div className="subtitle">Overview</div>

                <div className="summary"></div>
            </div>
        </div>
    </div>
  );
}

export default Code;

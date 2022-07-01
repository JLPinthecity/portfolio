import React from "react";
import laptop from "../images/laptop.svg";
import books from "../images/books.svg";
import peony from "../images/peony.svg";

import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-main">
        <div className="about-section">
          <div className="about-title">ABOUT</div>

          <div className="summary">
            Hi there! My name is Joann Pan and I'm a classically trained
            journalist (went to J-school) and bootcamp-taught programmer. After
            a decade of making content for various lifestyle brands, I decided
            to pursue my dream of learning how to code.
            <br />
            <br />
            Open to: Opportunities to build dynamic mobile-first websites from
            scratch. As a developer, I strive to write clean and accessible
            code. As a human, I like to spread kindness and positivity.
          </div>
        </div>

        <div className="illustration-container">
          <img
            src={books}
            className="illustration books"
            alt="illustration of books"
          />
        </div>

        <div className="about-title">experience & education</div>

        <div className="summary">
          After gaining a master's degree in journalism from the NYU Arthur L.
          Carter Journalism Institute, I worked at Oprah.com as a web producer,
          creating content, writing newsletters, and developing content
          strategy. At Well+Good, I worked as an assistent branded content
          editor, conceptualizing and writing sponsored wellness-focused
          content.
          <br />
          <br />I happily graduated from Flatiron School's Online Software
          Engineering Bootcamp in July 2021.
        </div>

        <br />

        <div className="illustration-container">
          <img
            src={laptop}
            className="illustration macbook"
            alt="illustration of macbook air with keys and screen showing"
          />
        </div>

        <div className="about-title">capabilities</div>
        <br />

        <div className="technologies-container">
          <div className="technologies text">
            <div className="technology">HTML</div>

            <div className="technology">CSS</div>

            <div className="technology">Ruby</div>
          </div>

          <div className="technologies text">
            <div className="technology">Sinatra</div>

            <div className="technology">Rails</div>

            <div className="technology">JavaScript</div>
          </div>

          <div className="technologies text">
            <div className="technology">React</div>

            <div className="technology">Redux</div>

            <div className="technology">Git</div>
          </div>
        </div>

        <div className="about-title">The Fun Stuff</div>
        <br />

        <div className="summary">
          Off the web, you can find me watering my plants, walking my sweet dog
          Buffy, and planning my next dream trip (Oahu!). Nothing makes me
          happier than piles of books, meals with friends, and interior-design
          blogs.
        </div>

        <div className="illustration-container">
          <img
            src={peony}
            className="illustration peony"
            alt="illustration of pink peony flower"
          />
        </div>

        <div className="prompt">
          Want to build something together? Get in touch{" "}
          <a href="mailto:hitherejoann@gmail.com?subject=CONTACT%20FORM">
            here
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

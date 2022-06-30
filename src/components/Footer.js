import React from "react";
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_main">
        <div className="contact">
          <h2>Contact</h2>
        </div>

        <div className="row">
          <AiOutlineMail className="icon" />

          <div className="email">hitherejoann@gmail.com</div>
        </div>

        <br />
        <br />

        <div className="social_icons">
          <a
            href="https://www.linkedin.com/in/joannpan"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin className="icon" />
          </a>
          <a
            href="https://www.pinterest.com/joannpan9/"
            target="_blank"
            rel="noreferrer"
          >
            <BsPinterest className="icon" />
          </a>
          <a
            href="https://github.com/JLPinthecity"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub className="icon" />
          </a>
        </div>

        <div className="copyright">
          <h4>Copyright © 2022 Joann Pan</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from 'react'
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import './Footer.css';

function Footer() {
    return (
        <div className="footer_wrapper">
            
            <div className="contact">
                <h2>Contact</h2>

                <div className="email">
                <AiOutlineMail className="icon"/> hitherejoann@gmail.com
            </div>

<br/><br/>
            <div className="social_icons">

                <AiOutlineLinkedin className="icon"/>
                
                <BsPinterest className="icon"/>

                <AiOutlineGithub className="icon"/>

            </div>

            <div className="copyright" >
                <h4>© 2021 Joann Pan</h4>
            </div>
        </div>
    </div>
    )
}

export default Footer;
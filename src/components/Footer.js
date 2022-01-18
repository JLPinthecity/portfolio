import React from 'react'
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import Burger from './Burger';
import './Footer.css';

function Footer() {
    return (
        <div className="footer_wrapper">

            <div className="footer_container">

                <div className="contact">
                    <h2>Contact</h2>
                </div>
            
                <div className="row">
                    <AiOutlineMail className="icon"/> 
    
                    <div className="email">hitherejoann@gmail.com</div>
                </div>

            <br/>
            <br/>

                <div className="social_icons">
                    <AiOutlineLinkedin className="icon"/>
                    <BsPinterest className="icon"/>
                    <AiOutlineGithub className="icon"/>
                </div>

                <div className="copyright" >
                    <h4>© 2022 Joann Pan</h4>
                </div>

            </div>
    </div>
    )
}

export default Footer;

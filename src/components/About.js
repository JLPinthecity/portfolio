import React from 'react';
import laptop from '../images/laptop.svg';
import books from '../images/books.svg';
import peony from '../images/peony.svg';

import './About.css';

function About() {
    return (
        <div className="about-wrapper">
            
            <div className="about-row">

                <div className="about-title">
                about
                </div>

                <br/>
                <br/>

                <div className="summary">
                    Hi there! My name is Joann and I'm a classically trained journalist (went to J-school) and bootcamp-taught full-stack developer. After a decade of making content for various lifestyle brands, I decided to pursue my dream of learning how to code. 
                    <br/>
                    <br/>
                    Open to: Opportunities to build dynamic mobile-first websites from scratch. As a developer, I strive to write clean and accessible code. As a human, I like to spread kindness and positivity. 
                </div>

            </div>

            <br/>
            <br/>

            <div className="block">

                <div className="illustration-container">
                    <img src={books} className="illustration books" alt="illustration of books"/>
                </div>
            
                <div className="title">
                experience & education
                </div>

                <div className="text">
                    <br/>
                After gaining a master's degree in journalism from NYU Arthur L. Carter Journalism Institute, I worked at Oprah.com as a web producer, creating content, writing newsletters, and developing content strategy. At Well+Good, I worked as an assistent branded content editor, conceptualizing and writing sponsored wellness-focused content.
                <br/>
                <br/>
                I happily graduated from Flatiron School's Online Software Engineering Bootcamp in July 2021. 
                </div>
        
            <br/>
            <br/>

                <div className="illustration-container">
                    <img src={laptop} className="illustration macbook" alt="illustration of macbook air with keys and screen showing"/>
                </div>
                <br/>
                <div className="title">
                capabilities
                </div>
                <br/>
                
                <div className="technologies-container">
                <div className="technologies text">

                    <div class="technology">
                    HTML
                    </div>

                    <div class="technology">
                    CSS
                    </div>

                    <div class="technology">
                    Ruby
                    </div>
                </div>

                <div className="technologies text">
                    <div class="technology">
                    Sinatra
                    </div>

                    <div class="technology">
                    Rails
                    </div>

                    <div class="technology">
                    JavaScript
                    </div>

                </div>

                <div className="technologies text">

                    <div class="technology">
                    React
                    </div>

                    <div class="technology">
                    Redux
                    </div>

                    <div class="technology">
                    Git
                    </div>
                </div>

                </div>

                <br/>
                <br/>

                <div className="illustration-container">
                    <img src={peony} className="illustration peony" alt="illustration of pink peony flower"/>
                </div>
                <br/>

                <div className="title">
                The Fun Stuff
                </div>
<br/>
                <div className="text">
                Off the web, you can likely find Joann watering her plants, walking her sweet dog Buffy, or planning her next dream trip (Oahu!). Nothing makes her happier than books, meals with friends, and interior-design blogs. 
                </div>

                <br/>
                <br/>
                <br/>

                <div className="prompt">
                Want to work together? Get in touch <a href="mailto:hitherejoann@gmail.com?subject=CONTACT%20FORM">here</a>
                </div>


            </div>     
        </div>
    )
}

export default About;

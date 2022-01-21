import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-wrapper">
            
            <div className="about-first-row">

                <div className="about-title gradient-text">
                about
                </div>

                <br/>
                <br/>

                <div className="summary">
                    Hi there! My name is Joann and I'm a classically trained journalist (went to J-school) and bootcamp-taught software engineer. After a decade of making content for various lifestyle brands, I decided to pursue my dream of learning how to code. 
                    <br/>
                    <br/>
                    Open to: Opportunities to build beautiful, dynamic mobile-first websites from scratch. As a developer, I strive to write clean and accessible code. As a human, I like to spread kindness and positivity. 
                </div>

                </div>

                    <br/>
                    <br/>

                <div className="block">
                    <img src={require('../images/books.jpg')} className="illustration" alt="illustration of books"/>
                
                    <div className="title">
                    experience & education
                    </div>
                </div>
                    
        
        </div>
    )
}

export default About;

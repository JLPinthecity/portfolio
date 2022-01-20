import React from 'react';
import Header from './Header';
import MinimalistFooter from './MinimalistFooter';
import Sidebar from './Sidebar';

function About() {
    return (
        <>
          
            
        
            <div className="about-title">
            ABOUT JOANN
            </div>

            <div className="summary">
                Hi there! My name is Joann and I'm a classically trained journalist (went to J-school) and bootcamp-taught software engineer. After a decade of making content for various big lifestyle brands, I decided to pursue my dream of learning how to code. 
                <br/>
                Like magic (with a side of hard work), I'm able to create dynamic mobile-first websites from scratch. 
                <br/>
                As a developer, I thrive to write clean and accessible code--and maintain a can-do attitude. As a human, I strive to spread kindness and positivity. 
                </div>
                

                <div className="footer">
        <MinimalistFooter/>
        </div>
        </>
    )
}

export default About;

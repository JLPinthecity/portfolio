import React from 'react';
import './Main.css';

function Main() {
    return (
        <div className="main-wrapper">

            <div className="left-side">

                <div className="welcome">
                    <img src={require('../logos/hithere.png')} className="hi" alt="hi there against blue background"/>
                </div>
                <br/>
                <br/>

                <div className="summary">
                    I'm Joann, a software developer and content creator based in NYC.
                </div>

                <br/>
                <br/>

                <div className="skills">

                    <div className="header1">
                        <h2>CODE</h2>
                    <div className="details">
                        HTML/CSS | Ruby | Rails | JavaScript | React | Redux
                    </div>
                    </div>


                    <div className="header2">
                        <h2>CONTENT</h2>

                    <div className="details">
                    Content creation | digital content strategy | editing  
                    </div>
                    </div>
                </div>



<br></br>

                <div className="button-wrapper">
                    <a href="/about" className="button">Learn more</a>
                </div>

            </div>

            <div className="right-side">
                <div className="image-placeholder">
                    <img src={require('../images/monstera.jpg')} className="hi" alt="monstera plant"/>
                </div>
            </div>

        </div>
    )
}

export default Main
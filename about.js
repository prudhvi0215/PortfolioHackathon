import React from 'react';
import Navbar from './navbar';
import "../App.css";

function About(){
    return(
        <>
        <Navbar />
        <div className='aboutPage'>
            <h1>About Me</h1>
            <h2>
                Passionate about coding and development and wanted to create career in that path.
            </h2>
        </div>
        </>
    );
}

export default About;
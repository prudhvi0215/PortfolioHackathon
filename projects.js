import React from 'react';
import Navbar from './navbar';
import prj1 from "../Images/p1.jpg";
import prj2 from "../Images/p2.png";
import prj3 from "../Images/p3.png";
import prj4 from "../Images/p4.jpg";
import "../App.css";

function Projects(){
    return(
        <>
            <Navbar />
            <div className="projectImgs">
                <div className="proj">
                    <a href="https://github.com/prudhvi0215/surveyForm" target="_blank"><img src={prj1} /></a>
                    <h3>Full stack project created using MERN Stack.</h3>
                </div>
                <div className="proj">
                    <a href="https://github.com/prudhvi0215/SnapSave" target="_blank"><img src={prj2} /></a>
                    <h3>Mini Project created using OTP Integration</h3>
                </div>
                <div id="proj3" className="proj">
                    <a href="https://github.com/prudhvi0215/tinDog" target="_blank"><img src={prj3} /></a>
                    <h3>Beautiful UI Focused Web Application</h3>
                </div>
                <div className="proj">
                <a href="https://github.com/prudhvi0215/Notepad_MileStoneProject" target="_blank"><img src={prj4} /></a>
                    <h3>Traklabs Mile Stone Project</h3>
                </div>
            </div>
        </>
        
    );
}

export default Projects;
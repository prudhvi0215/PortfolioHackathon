import React from 'react';
import Navbar from './navbar';
import prudhvi from '../Images/prudhvi.jpg';
import "../App.css";

function Home(){
    return(
        <div>
            <Navbar />
            <div className="homeContainer">
                <div className='homePage'>
                    <div className='intro'>
                        <p>Hi, my name is</p>
                        <h1>Prudhvi Raj</h1>
                        <h2>I build things for web.</h2>
                        <div className='profileLinks'>
                            <a href="https://github.com/prudhvi0215" target="_blank">Github</a>
                            <a href="https://www.linkedin.com/in/prudhvi-raj-134001191" target="_blank">LinkedIn</a>
                        </div>
                    </div>
                    <img src={prudhvi} alt="myPicture" />
                </div>
            </div>
        </div>
    );
}

export default Home;
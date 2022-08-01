import React from 'react';
import {Link} from 'react-router-dom';

import "../App.css";

function Navbar(){
    return(
        <div className='navbar'>
            <h2>Prudhvi Raj</h2>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <a href='https://drive.google.com/file/d/10DuROCXqoWXWtBV9P0wVKcpJ49mPhd2v/view?usp=sharing'  target="_blank" download><li>Resume</li></a>
            </ul>
        </div>
    );
}

export default Navbar;
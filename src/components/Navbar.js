import React from 'react'
import logo from '../logo.png'


function Navbar(){
    return (
        <>
        <nav className="navbar">
            <h2><span>h</span>tin <span>z</span>aw</h2>
            <a><img className="logo" src={logo} alt="logo" /></a>
            <div><h2> <span>p</span>ortfolio</h2></div>
            <div className="nav-links">
                <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">my works</a></li>
                <li><a href="#">my skills</a></li>
                <li><a href="#">contact</a></li>
                </ul>
            </div>
        </nav>
        </>

    );
}

export default Navbar;
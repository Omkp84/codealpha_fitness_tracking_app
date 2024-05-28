import React from "react";
import './styles/Header.css';

function Header({ onNavClick }) {
    return (
        <div className="Header">
            <div className="headercontain">
            <p>Fitness<b>Plus</b></p>
            <ul>
                <li><button onClick={() => onNavClick('Main')}>Home</button></li>
                <li><button onClick={() => onNavClick('TrackData')}>Track</button></li>
                <li><button onClick={() => onNavClick('Logworkouts')}>workouts</button></li>
                <li><button onClick={() => onNavClick('Goals')}>Goals</button></li>
                <li><button onClick={() => onNavClick('TrackData')}>Program</button></li>
                <li><button onClick={() => onNavClick('TrackData')}>About us</button></li>
            </ul>
            <button className="joinbtn">Join Now</button>
            </div>
        </div>
    )
}

export default Header
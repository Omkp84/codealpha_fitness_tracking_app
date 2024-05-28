import React from "react";
import './styles/main.css';

function Main({ children }) {
    return (
        <div className="main">
            <div className="maincontent">
                <p className="behindtext">Fitness Tracking</p>
                <div className="mainimage"></div>
                <div className="boxescontain">
                    <div className="boxcards">+140<p>Equments</p></div>
                    <div className="boxcards">+987<p>Members Joined</p></div>
                    <div className="boxcards">+100<p>Programes</p></div>
                </div>
                <div class="cards">
                    <div class="card_box">
                        <span className="span1"><p>20$</p></span>
                    </div>
                    <div class="card_box">
                        <span className="span2"><p>40$</p></span>
                    </div>
                    <div class="card_box">
                        <span className="span3"><p>60$</p></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
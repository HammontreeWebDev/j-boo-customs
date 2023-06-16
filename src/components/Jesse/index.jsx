import React from "react";
import './assets/css/jesse.css';

const Jesse = (props) => {

    return (
        <div className="jesse-container">
            <div className="title-container">
                <div className="h1-header jesse-title">
                    {props.whiteTitle} <span className="light-blue-text">{props.blueTitle}</span>
                </div>
                <img className="jesse-img" src={props.src} alt={props.alt} />
            </div>

            <div className="text-container">
                <div className="jesse-text">
                    {props.text}
                </div>
            </div>
        </div>
    )
};

export default Jesse;
import React from "react";
import './assets/css/standard-card.css';

const StandardCard = (props) => {

    // ! For Entire Div
    const initialClass = "card-container animate__animated animate__fadeIn";
    const exitClass = "card-container animate__animated animate__fadeOut";

    return (
        <div className={props.isPageChanging ? exitClass : initialClass}>

            <h2 className="card-title">
                <span className="light-green-text">
                    {props.greenTitle}
                </span>
                {props.whiteTitle}
            </h2>
            <p className="standard-text-body">
                {props.bodyText}
            </p>
            {props.customContent}
        </div>
    )
};

export default StandardCard;
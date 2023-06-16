import React from "react";
import './assets/css/standard-card.css';

const StandardCard = (props) => {

    return (
        <div className="card-container">

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
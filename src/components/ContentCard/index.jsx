import React from "react";
import './assets/css/content-card.css';

const ContentCard = (props) => {

    return (
        <div className="content-card">

            <div className="custom-title">
                <h2 className="card-title text-center"><span className="green-text">{props.greenText}</span> {props.whiteText}</h2>
            </div>

            <div className="custom-card-body">
            <p className="body-text custom-body-text">{props.bodyText}</p>
            </div>

        </div>
    )
}

export default ContentCard;
import React from "react";
import './assets/css/fancy-card.css';
import fancyCardHeader from './assets/img/fancy-card-header.svg';

const FancyCard = (props) => {

    return(
        <div className="fancy-container">
            <img className="fancy-header" src={fancyCardHeader} alt="Green Arch to enhance design"/>

            {/* 30% width justify self center for picture*/}
            <div className="title-pic-col fancy-text">
                <h2 className="card-title reset-margin about-us-title">
                    {props.memberName}
                </h2>
                <img className="member-photo" src={props.memberPhoto} alt={props.alt} />
            </div>

            {/* flex1 to take up space */}
            <div className="text-col fancy-text">
                <p>{props.aboutText}</p>
            </div>
        </div>
    )
}

export default FancyCard;
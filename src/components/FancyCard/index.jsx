import React from "react";
import './assets/css/fancy-card.css';
import fancyCardHeader from './assets/img/fancy-card-header.svg';

const FancyCard = (props) => {

    return(
        <div className="fancy-container">
            <img className="fancy-header" src={fancyCardHeader} alt="Green Arch to enhance design"/>

            <div className="title-pic-col fancy-text">
                <h2 className="card-title reset-margin about-us-title">
                    {props.memberName}
                </h2>
                <img id={props.photoId} className="member-photo" src={props.memberPhoto} alt={props.alt} />
            </div>

            <div className={props.classSelector}>
                <p className="about-text">{props.aboutText}</p>
                {props.contactInfo}
            </div>
        </div>
    )
}

export default FancyCard;
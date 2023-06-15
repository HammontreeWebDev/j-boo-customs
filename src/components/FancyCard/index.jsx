import React from "react";
import './assets/css/fancy-card.css';
import fancyCardHeader from './assets/img/fancy-card-header.svg';

const FancyCard = () => {

    return(
        <div className="fancy-container">
            <img className="fancy-header" src={fancyCardHeader} alt="Green Arch to enhance design"/>
            <h2 className="fancy-text"> Test text </h2>
        </div>
    )
}

export default FancyCard;
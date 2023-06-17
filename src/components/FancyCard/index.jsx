import React from "react";
import useImageLoading from '../../utils/imageLoadingUtils';
// css
import './assets/css/fancy-card.css';
import fancyCardHeader from './assets/img/fancy-card-header.svg';

// components
import LoadSpinner from "../LoadSpinner";

const FancyCard = (props) => {
    // keep track of state of image load using helper function
    const { isImageLoaded, handleImageLoad } = useImageLoading();
    // ! For Images
    const imgClass = isImageLoaded ? "member-photo animate__animated animate__fadeIn" : "hidden";

    // ! For Entire Div
    const initialClass = "fancy-container animate__animated animate__fadeIn";
    const exitClass = "fancy-container animate__animated animate__fadeOut";

    return (
        <div id={props.fancyContainerId} className={props.isPageChanging ? exitClass : initialClass}>
            <img className="fancy-header" src={fancyCardHeader} alt="Green Arch to enhance design" />

            <div id={props.titleColId} className="title-pic-col fancy-text">
                <h2 className="card-title reset-margin about-us-title">
                    {props.memberName}
                </h2>
                <img id={props.photoId} className={imgClass} src={props.memberPhoto} alt={props.alt} onLoad={handleImageLoad} onLoadedData={handleImageLoad} />
                {isImageLoaded ? null : <LoadSpinner />}
            </div>

            <div className={props.classSelector}>
                <p className="about-text">{props.aboutText}</p>
                {props.contactInfo}
            </div>
        </div>
    )
}

export default FancyCard;
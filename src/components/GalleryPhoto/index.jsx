import React from "react";
import './assets/css/gallery.css';
import 'animate.css';

const GalleryPhoto = (props) => {
    const initialClass = "gallery-photo";
    const exitClass = "gallery-photo animate__animated animate__fadeOut";

    return(
        <img className={props.isPageChanging ? exitClass : initialClass} src={props.src} alt={props.alt} />
    )
}

export default GalleryPhoto;
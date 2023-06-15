import React from "react";
import './assets/css/gallery.css';

const GalleryPhoto = (props) => {
    return(
        <img className="gallery-photo" src={props.src} alt={props.alt} />
    )
}

export default GalleryPhoto;
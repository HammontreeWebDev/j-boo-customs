import React from "react";
import './assets/css/custom-video.css';

const CustomVideo = (props) => {

    return(
        <video className="custom-video" src={props.src} controls={true} autoPlay={false} />
    )
}

export default CustomVideo;
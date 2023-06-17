import React from "react";
import './assets/css/page-title.css';

// animations
import { Fade } from "react-awesome-reveal";

const PageTitle = (props) => {
    
    return(
        <div className="page-title-bg">
        <Fade direction="right" duration={1500} onVisibilityChange={false} triggerOnce={true}><h1 className="h1-header title-text">{props.whiteText} <span className="green-text">{props.greenText}</span></h1></Fade>
        </div>
    )
}

export default PageTitle;
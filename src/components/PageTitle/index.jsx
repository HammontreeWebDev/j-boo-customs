import React from "react";
import './assets/css/page-title.css';

const PageTitle = (props) => {
    
    return(
        <h1 className="h1-header title-text">{props.whiteText} <span className="green-text">{props.greenText}</span></h1>
    )
}

export default PageTitle;
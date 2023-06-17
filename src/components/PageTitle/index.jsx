import React from "react";
import './assets/css/page-title.css';

// animations

const PageTitle = (props) => {

    return (
        <div className="page-title-bg">
            <h1 className="h1-header title-text">{props.whiteText} <span className="green-text">{props.greenText}</span></h1>
        </div>
    )
}

export default PageTitle;
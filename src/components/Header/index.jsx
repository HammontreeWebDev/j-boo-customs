import React from "react";

import './assets/css/header.css';

const Header = (props) => {
    return(
        <header className="header-component" style={{backgroundImage: `url(${props.backgroundImage})`}}>

        </header>
    )
}

export default Header;
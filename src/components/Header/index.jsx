import React from "react";

import './assets/css/header.css';
import headerShape from './assets/img/header-shape.svg';

const Header = (props) => {
    return(
        <header className="header-component" style={{backgroundImage: `url(${props.backgroundImage})`}}>
            <img className="header-shape" src={headerShape} />

        </header>
    )
}

export default Header;
import React from "react";

import './assets/css/header.css';
import headerShape from './assets/img/header-shape.svg';

const Header = (props) => {
    return (
        <header className="header-component" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            <img className="header-shape" src={headerShape} alt="Red Arch to enhance design" />
            <div className="header-content">
                <h1 className="h1-header">Jesse Ryder Brown Foundation, INC</h1>
                <nav className="nav-bar">
                    <button>Hello</button>
                    <button>Hello</button>
                    <button>Hello</button>
                    <button>Hello</button>
                    <button>Hello</button>
                </nav>
            </div>
        </header>
    )
}

export default Header;
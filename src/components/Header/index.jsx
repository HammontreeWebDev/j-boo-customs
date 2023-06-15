import React, { useState, useEffect } from "react";

import './assets/css/header.css';
import headerShape from './assets/img/header-shape.svg';
import { Icon, enableCache } from '@iconify/react';

enableCache('local');

const Header = (props) => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsNavCollapsed(window.innerWidth <= 1330);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="header-component" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            <img className="header-shape" src={headerShape} alt="Red Arch to enhance design" />
            <div className="header-content">
                <h1 className="h1-header">Jesse Ryder Brown Foundation, INC</h1>

                <button className="toggle-nav-button" onClick={() => setIsNavCollapsed(!isNavCollapsed)}>
                    <Icon icon="line-md:close-to-menu-alt-transition" />
                </button>

                <nav
                    id='dropdown-nav'
                    className={`nav-bar ${isNavCollapsed ? 'collapsed dropdown-nav-hidden' : 'dropdown-nav-visible'}`}>
                    <button className="subheading-text">About Us</button>
                    <button className="subheading-text">Jesse's Story</button>
                    <button className="subheading-text">Strep A Awareness</button>
                    <button className="subheading-text">Contact Us</button>
                    <button className="subheading-text">Donations</button>
                </nav>
            </div>
        </header>
    )
}

export default Header;
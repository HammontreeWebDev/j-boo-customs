import React, { useState, useEffect } from "react";

import './assets/css/header.css';
import headerShape from './assets/img/header-shape.svg';
import { Icon, enableCache } from '@iconify/react';
import { useNavigate } from "react-router-dom";

enableCache('local');

const Header = (props) => {

    // keep track of state for the collapsible navbar
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsNavCollapsed(window.innerWidth <= 1330);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // declare navigate to use in onClick for nav buttons
    const navigate = useNavigate();
    return (
        <header className="header-component" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            <img className="header-shape" src={headerShape} alt="Red Arch to enhance design" />
            <div className="header-content">

                
                <button onClick={() => navigate('/')} className="h1-header jrb-button">
                    Jesse Ryder Brown Foundation, INC
                </button>
                


                <button className="toggle-nav-button" onClick={() => setIsNavCollapsed(!isNavCollapsed)}>
                    <Icon icon="line-md:close-to-menu-alt-transition" />
                </button>

                <nav
                    id='dropdown-nav'
                    className={`nav-bar ${isNavCollapsed ? 'collapsed dropdown-nav-hidden' : 'dropdown-nav-visible'}`}>

                    <button whileHover={{scale: 1.2}}onClick={() => navigate('/about_us')} className="subheading-text">About Us</button>

                    <button onClick={() => navigate('/jesses_story')} className="subheading-text">Jesse's Story</button>

                    <button onClick={() => navigate('/strep_a_awareness')} className="subheading-text">Strep A Awareness</button>

                    <button onClick={() => navigate('/contact_us')} className="subheading-text">Contact Us</button>

                    <button onClick={() => navigate('/donations')} className="subheading-text">Donations</button>
                </nav>
                <div className="header-subtext tagline-container">
                    <p className="header-tagline">
                        J-Boo Customs Store
                        <br />
                        Coming Soon!
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header;
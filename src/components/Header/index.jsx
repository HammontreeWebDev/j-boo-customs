import React, { useState, useEffect } from "react";
// css
import './assets/css/header.css';
// components
import LoadingDiv from "../LoadingDiv";

import { useNavigate } from "react-router-dom";

// images/icons
import headerShape from './assets/img/header-shape.svg';
import { Icon, enableCache } from '@iconify/react';
enableCache('local');

const Header = (props) => {

    // keep track of state
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

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

    // handle image loading
    const handleImageLoad = () => {
        setIsImageLoaded(true);
    }

    const headerImageClass = isImageLoaded ? "background-img animate__animated animate__fadeIn" : "hidden";

    return (
        <header className="header-component">
            <img className="header-shape" src={headerShape} alt="Red Arch to enhance design" />

            {isImageLoaded ? null : <LoadingDiv />}

            <img className={headerImageClass} src={props.backgroundImage} alt={props.alt} onLoad={handleImageLoad} onLoadedData={handleImageLoad} />

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

                    <button onClick={() => navigate('/about_us')} className="subheading-text">About Us</button>

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
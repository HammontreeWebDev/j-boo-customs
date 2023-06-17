import React from "react";
// css
import './assets/css/footer.css';

// img
import footerShape from './assets/img/footer.svg';

const Footer = () => {

    return(
        <footer className="footer-component">
            <img className="footer-shape" src={footerShape} alt="Red Arch to enhance design" />
        </footer>
    )
}

export default Footer;
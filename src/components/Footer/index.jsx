import React from "react";
// css
import './assets/css/footer.css';

// img
import footerShape from './assets/img/footer.svg';

const Footer = () => {

    return(
        <footer className="footer-component">
            <img className="footer-shape" src={footerShape} alt="Red Arch to enhance design" />
            <p className="copyright">Copyright © 2023 Jesse Ryder Brown Foundation, Inc.</p>
            <small className="small-text">Website Built By: <span><a className="hyperlink" href="https://www.kailebhammontree.com/" target="_blank" rel="noreferrer">Hammontree Full-Stack Solutions LLC</a></span></small>
        </footer>
    )
}

export default Footer;
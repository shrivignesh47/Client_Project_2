import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../Asserts/arrow.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src={logo} alt="Arrow Structures Logo" className="logo" />
                        <span className="company-name">Arrow Structures</span>
                    </div>
                    <p className="description">
                        Leading the way in innovative structural and civil engineering solutions since 2017.
                    </p>
                    <p className="copyright">
                        © 2024 Arrow Structures. All rights reserved.
                    </p>
                </div>
                <div className="footer-right">
                    <div className="footer-links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/services">Our Services</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/faq">FAQs</Link></li>
                            <li><Link to="/news">Latest News</Link></li>
                        </ul>
                    </div>
                    <div className="footer-icons">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://in.linkedin.com/company" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="mailto:" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

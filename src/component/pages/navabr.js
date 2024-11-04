import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../Asserts/logo192.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className={`navbar-brand ${scrolled ? 'scrolled' : ''}`}>
          <img src={logo} alt="Logo" className="logo" />
          <span className={`brand-name ${scrolled ? 'scrolled' : ''}`}>ARROW STRUCTURE</span>
        </div>

        <button className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          {/* Toggle between 9 dots and an "X" icon */}
          {isOpen ? (
            <span className="close-icon">✕</span>
          ) : (
            Array.from({ length: 9 }).map((_, index) => <span key={index}></span>)
          )}
        </button>

        <ul className={`navbar-links ${isOpen ? 'open' : ''} ${scrolled ? 'scrolled' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

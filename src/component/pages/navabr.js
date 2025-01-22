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

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className={`navbar-brand ${scrolled ? 'scrolled' : ''}`}>
          <img src={logo} alt="Logo" className="logo" />
          <span className={`brand-name ${scrolled ? 'scrolled' : ''}`}>ARROW STRUCTURES</span>
        </div>

        <button className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          {isOpen ? (
            <span className="close-icon">✕</span>
          ) : (
            Array.from({ length: 9 }).map((_, index) => <span key={index}></span>)
          )}
        </button>

        <ul className={`navbar-links ${isOpen ? 'open' : ''} ${scrolled ? 'scrolled' : ''}`}>
          <li><Link to="/" onClick={closeNavbar}>Home</Link></li>
          <li><Link to="/services" onClick={closeNavbar}>Services</Link></li>
          <li><Link to="/about-us" onClick={closeNavbar}>About Us</Link></li>
          <li><Link to="/contact" onClick={closeNavbar}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

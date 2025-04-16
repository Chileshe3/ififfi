import React, { useState } from 'react';
import useScrollDirection from '../hooks/useScrollDirection';
import '../styles/Navigation.css';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isHidden = useScrollDirection();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <nav className={`navigation ${isOpen ? 'nav-open' : ''} ${isHidden ? 'nav-hidden' : ''}`}>
      <div className="nav-logo">Mystical Realms</div>
      <button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
        <button 
          className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => handleNavClick('home')}
        >
          Home
        </button>
        <button 
          className={`nav-button ${currentPage === 'phenomena' ? 'active' : ''}`}
          onClick={() => handleNavClick('phenomena')}
        >
          Phenomena
        </button>
        <button 
          className={`nav-button ${currentPage === 'artifacts' ? 'active' : ''}`}
          onClick={() => handleNavClick('artifacts')}
        >
          Artifacts
        </button>
        <button 
          className={`nav-button ${currentPage === 'mysteries' ? 'active' : ''}`}
          onClick={() => handleNavClick('mysteries')}
        >
          Mysteries
        </button>
        <button 
          className={`nav-button ${currentPage === 'about' ? 'active' : ''}`}
          onClick={() => handleNavClick('about')}
        >
          About
        </button>
        <div className="nav-secondary">
          <button 
            className={`nav-button ${currentPage === 'sitemap' ? 'active' : ''}`}
            onClick={() => handleNavClick('sitemap')}
          >
            Sitemap
          </button>
          <button 
            className={`nav-button ${currentPage === 'privacy' ? 'active' : ''}`}
            onClick={() => handleNavClick('privacy')}
          >
            Privacy
          </button>
          <button 
            className={`nav-button ${currentPage === 'terms' ? 'active' : ''}`}
            onClick={() => handleNavClick('terms')}
          >
            Terms
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
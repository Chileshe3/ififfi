import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useScrollDirection from '../hooks/useScrollDirection';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isHidden = useScrollDirection();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navigation ${isOpen ? 'nav-open' : ''} ${isHidden ? 'nav-hidden' : ''}`}>
      <div className="nav-logo" onClick={() => handleNavClick('/')}>Mystical Realms</div>
      <button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
        <button 
          className={`nav-button ${isActive('/') ? 'active' : ''}`}
          onClick={() => handleNavClick('/')}
        >
          Home
        </button>
        <button 
          className={`nav-button ${isActive('/phenomena') ? 'active' : ''}`}
          onClick={() => handleNavClick('/phenomena')}
        >
          Phenomena
        </button>
        <button 
          className={`nav-button ${isActive('/artifacts') ? 'active' : ''}`}
          onClick={() => handleNavClick('/artifacts')}
        >
          Artifacts
        </button>
        <button 
          className={`nav-button ${isActive('/mysteries') ? 'active' : ''}`}
          onClick={() => handleNavClick('/mysteries')}
        >
          Mysteries
        </button>
        <button 
          className={`nav-button ${isActive('/about') ? 'active' : ''}`}
          onClick={() => handleNavClick('/about')}
        >
          About
        </button>
        <div className="nav-secondary">
          <button 
            className={`nav-button ${isActive('/sitemap') ? 'active' : ''}`}
            onClick={() => handleNavClick('/sitemap')}
          >
            Sitemap
          </button>
          <button 
            className={`nav-button ${isActive('/privacy') ? 'active' : ''}`}
            onClick={() => handleNavClick('/privacy')}
          >
            Privacy
          </button>
          <button 
            className={`nav-button ${isActive('/terms') ? 'active' : ''}`}
            onClick={() => handleNavClick('/terms')}
          >
            Terms
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
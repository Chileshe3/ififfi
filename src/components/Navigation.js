import React from 'react';
import useScrollDirection from '../hooks/useScrollDirection';
import '../styles/Navigation.css';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const scrollDirection = useScrollDirection();

  return (
    <nav className={`nav-bar ${scrollDirection === 'down' ? 'hide' : ''}`}>
      <div className="nav-logo">Mystical Realms</div>
      <div className="nav-links">
        <button 
          className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentPage('home')}
        >
          Home
        </button>
        <button 
          className={`nav-button ${currentPage === 'phenomena' ? 'active' : ''}`}
          onClick={() => setCurrentPage('phenomena')}
        >
          Phenomena
        </button>
        <button 
          className={`nav-button ${currentPage === 'artifacts' ? 'active' : ''}`}
          onClick={() => setCurrentPage('artifacts')}
        >
          Artifacts
        </button>
        <button 
          className={`nav-button ${currentPage === 'mysteries' ? 'active' : ''}`}
          onClick={() => setCurrentPage('mysteries')}
        >
          Mysteries
        </button>
        <button 
          className={`nav-button ${currentPage === 'about' ? 'active' : ''}`}
          onClick={() => setCurrentPage('about')}
        >
          About
        </button>
        <div className="nav-secondary">
          <button 
            className={`nav-button ${currentPage === 'sitemap' ? 'active' : ''}`}
            onClick={() => setCurrentPage('sitemap')}
          >
            Sitemap
          </button>
          <button 
            className={`nav-button ${currentPage === 'privacy' ? 'active' : ''}`}
            onClick={() => setCurrentPage('privacy')}
          >
            Privacy
          </button>
          <button 
            className={`nav-button ${currentPage === 'terms' ? 'active' : ''}`}
            onClick={() => setCurrentPage('terms')}
          >
            Terms
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
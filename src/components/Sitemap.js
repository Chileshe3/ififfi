import React from 'react';
import './Sitemap.css';

const Sitemap = () => {
  return (
    <div className="sitemap-page">
      <div className="mysterious-bg">
        <h1 className="page-title">Mystical Realms Map</h1>
        <div className="sitemap-grid">
          <div className="map-section">
            <h2>Main Realms</h2>
            <ul className="realm-list">
              <li><span className="realm-icon">🏛️</span> Home Portal</li>
              <li><span className="realm-icon">🌌</span> Phenomena Domain</li>
              <li><span className="realm-icon">⚱️</span> Artifact Chamber</li>
              <li><span className="realm-icon">🔮</span> Mystery Vault</li>
            </ul>
          </div>
          <div className="map-section">
            <h2>Sacred Texts</h2>
            <ul className="realm-list">
              <li><span className="realm-icon">📜</span> About the Order</li>
              <li><span className="realm-icon">⚖️</span> Terms of Passage</li>
              <li><span className="realm-icon">🔒</span> Privacy Scroll</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
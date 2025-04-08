import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="mysterious-bg">
        <h1 className="page-title">Sacred Privacy Scroll</h1>
        <div className="scroll-container">
          <div className="scroll-content">
            <section className="privacy-section">
              <h2>🔮 Mystical Data Collection</h2>
              <p>In our ethereal pursuit of knowledge, we gather only the essence of your journey through our realms...</p>
            </section>
            
            <section className="privacy-section">
              <h2>⚡ Energy Protection</h2>
              <p>Your spiritual data is protected by ancient wards and modern encryption...</p>
            </section>

            <section className="privacy-section">
              <h2>🌙 Cosmic Cookies</h2>
              <p>We use mystical trackers known as "cookies" to enhance your interdimensional experience...</p>
            </section>
          </div>
          <div className="magical-seal"></div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
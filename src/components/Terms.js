import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="mysterious-bg">
        <h1 className="page-title">Ancient Terms of Passage</h1>
        <div className="terms-container">
          <div className="terms-scroll">
            <section className="terms-section">
              <h2>📜 Sacred Agreement</h2>
              <p>By entering these mystical realms, you agree to abide by the ancient laws...</p>
            </section>
            
            <section className="terms-section">
              <h2>⚔️ Code of Conduct</h2>
              <p>Maintain respectful energy in all interdimensional interactions...</p>
            </section>

            <section className="terms-section">
              <h2>🏺 Artifact Usage</h2>
              <p>Handle all mystical knowledge with appropriate reverence...</p>
            </section>
          </div>
          <div className="ancient-seal"></div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h1 className="about-title">About Mysterious Phenomena</h1>
        
        <section className="about-section mission">
          <h2>Our Mission</h2>
          <p>At Mysterious Phenomena, we bridge the gap between the known and unknown, conducting rigorous research into unexplained phenomena across the globe. Our dedication to scientific methodology combined with open-minded exploration drives our pursuit of understanding the universe's greatest mysteries.</p>
        </section>

        <section className="about-section expertise">
          <h2>Our Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>Scientific Research</h3>
              <p>Leading-edge investigation methods and advanced analytical tools</p>
            </div>
            <div className="expertise-card">
              <h3>Global Network</h3>
              <p>Collaborative partnerships with researchers worldwide</p>
            </div>
            <div className="expertise-card">
              <h3>Documentation</h3>
              <p>State-of-the-art documentation and analysis systems</p>
            </div>
          </div>
        </section>

        <div className="mystery-stats">
          <div className="stat">
            <h3>1000+</h3>
            <p>Phenomena Documented</p>
            <div className="stat-glow"></div>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Countries Explored</p>
            <div className="stat-glow"></div>
          </div>
          <div className="stat">
            <h3>20+</h3>
            <p>Years Experience</p>
            <div className="stat-glow"></div>
          </div>
        </div>

        <section className="about-section methodology">
          <h2>Our Approach</h2>
          <div className="methodology-steps">
            <div className="step">
              <span className="step-number">01</span>
              <h4>Investigation</h4>
              <p>Thorough on-site research and data collection</p>
            </div>
            <div className="step">
              <span className="step-number">02</span>
              <h4>Analysis</h4>
              <p>Advanced scientific analysis and verification</p>
            </div>
            <div className="step">
              <span className="step-number">03</span>
              <h4>Documentation</h4>
              <p>Comprehensive reporting and archival</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
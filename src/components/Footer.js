import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [message, setMessage] = useState('');

  return (
    <footer className="mysterious-footer">
      <div className="mystical-symbols">
        <span className="symbol">☯</span>
        <span className="symbol1">☯</span>
        <span className="symbol2">☯</span>
        <span className="symbol3">☯</span>
      </div>
      
      <div className="footer-content">
        <div className="ethereal-text">
          <p className="glow-text">Venture into the Unknown</p>
          <p className="fade-text">Where Reality Meets Mystery</p>
        </div>
        
        <div className="portal-links">
          <a href="#" className="portal-link">Ancient Secrets</a>
          <a href="#" className="portal-link">Cosmic Wisdom</a>
          <a href="#" className="portal-link">Dimensional Gates</a>
        </div>
      </div>

      <div className="energy-lines"></div>
      
      <div className="floating-particles"></div>

      <div className="cosmic-section">
        <div className="cosmic-clock">
          <div className="clock-ring"></div>
          <div className="clock-center"></div>
          <div className="clock-symbols">
            <span>✧</span><span>⚜</span><span>⚝</span><span>✤</span>
          </div>
        </div>

        <div className="mystic-nav">
          <div className="nav-crystal"></div>
          <nav className="ethereal-menu">
            <a href="#realms">Hidden Realms</a>
            <a href="#artifacts">Lost Artifacts</a>
            <a href="#prophecies">Ancient Prophecies</a>
            <a href="#knowledge">Forbidden Knowledge</a>
          </nav>
        </div>
      </div>

      <div className="contact-portal">
        <div className="portal-frame">
          <h3>Contact the Beyond</h3>
          <input 
            type="text" 
            placeholder="Share your mystical experience..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="ethereal-input"
          />
          <button className="mystic-button">Send to the Void</button>
        </div>
      </div>

      <div className="mystical-indicators">
        <div className="energy-meter">
          <div className="meter-fill"></div>
        </div>
        <div className="quantum-symbols">
          <span>Φ</span>
          <span>Ψ</span>
          <span>Ω</span>
        </div>
      </div>

      <div className="constellation-map">
        <div className="stars"></div>
        <div className="constellation-lines"></div>
        <div className="constellation-points">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="star-point"></div>
          ))}
        </div>
      </div>

      <div className="ancient-runes">
        <div className="rune">ᚨ</div>
        <div className="rune">ᚷ</div>
        <div className="rune">ᚱ</div>
        <div className="rune">ᛟ</div>
        <div className="rune">ᚹ</div>
      </div>

      <div className="newsletter-portal">
        <div className="portal-glow"></div>
        <h4>Join the Mystical Network</h4>
        <div className="signup-form">
          <input type="email" placeholder="Enter your ethereal address" className="ethereal-input" />
          <button className="mystic-button pulse">Transcend</button>
        </div>
      </div>

      <div className="mystic-seal">
        <div className="seal-inner"></div>
        <div className="seal-outer"></div>
      </div>
      
      <div className="footer-signature">
        <p>Made with ❤️ by Chileshe</p>
      </div>
    </footer>
  );
};

export default Footer;
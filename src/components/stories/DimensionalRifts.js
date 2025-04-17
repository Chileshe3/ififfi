import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Story.css';

function DimensionalRifts() {
  const navigate = useNavigate();

  return (
    <div className="story-container">
      <button className="back-button" onClick={() => navigate('/')}>← Back</button>
      <h1 className="story-title">Dimensional Rifts</h1>
      <div className="story-sections">
        <section className="story-section">
          <h2>The Discovery</h2>
          <div className="section-content">
            <p>In the heart of the Siberian wilderness, researchers stumbled upon an anomaly that defied the laws of physics. A shimming tear in the fabric of reality, measuring approximately 3 meters in height, appeared to connect our world with... somewhere else.</p>
            <div className="image-container">
              <img src="/images/dimensional-rift-discovery.jpg" alt="Dimensional Rift Discovery Site" />
            </div>
          </div>
        </section>

        <section className="story-section">
          <h2>Scientific Analysis</h2>
          <div className="section-content">
            <p>Initial readings showed extreme gravitational fluctuations and quantum entanglement patterns never before observed in nature. The rift seemed to pulse with an otherworldly energy, emitting frequencies across the electromagnetic spectrum.</p>
            <div className="image-container">
              <img src="/images/rift-analysis.jpg" alt="Scientific Equipment Around the Rift" />
            </div>
          </div>
        </section>

        <section className="story-section">
          <h2>Unexplained Phenomena</h2>
          <div className="section-content">
            <p>Objects placed near the rift experienced time dilation effects. A clock left near the anomaly for 24 hours showed only 18 hours had passed. More disturbing were the voices - recordings captured fragments of conversations in unknown languages.</p>
            <div className="image-container">
              <img src="/images/rift-phenomena.jpg" alt="Time Dilation Effects" />
            </div>
          </div>
        </section>
      </div>
      
      <div className="story-conclusion">
        <p>As we continue to study these dimensional rifts, one question remains: Are they natural phenomena, or evidence of something far more profound? The investigation continues, but some mysteries may be better left unexplored...</p>
      </div>
    </div>
  );
}

export default DimensionalRifts;

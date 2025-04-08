import React from 'react';
import './Phenomena.css';

const Phenomena = () => {
  return (
    <div className="phenomena-page">
      <div className="mysterious-bg">
        <h1 className="page-title">Mysterious Phenomena</h1>
        <div className="phenomena-grid">
          <div className="phenomenon-item">
            <div className="phenomenon-icon">🌌</div>
            <h3>Time Slips</h3>
            <p>Unexplained temporal anomalies across history...</p>
          </div>
          <div className="phenomenon-item">
            <div className="phenomenon-icon">🌊</div>
            <h3>Quantum Tunneling</h3>
            <p>Objects passing through solid matter...</p>
          </div>
          <div className="phenomenon-item">
            <div className="phenomenon-icon">👻</div>
            <h3>Spectral Manifestations</h3>
            <p>Documented cases of ethereal appearances...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phenomena;
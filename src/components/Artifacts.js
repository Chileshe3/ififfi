import React from 'react';
import './Artifacts.css';

const Artifacts = () => {
  return (
    <div className="artifacts-page">
      <div className="mysterious-bg">
        <h1 className="page-title">Ancient Artifacts</h1>
        <div className="artifacts-grid">
          <div className="artifact-item">
            <div className="artifact-icon">🏺</div>
            <h3>Voynich Manuscript</h3>
            <p>An illustrated codex written in an unknown writing system...</p>
          </div>
          <div className="artifact-item">
            <div className="artifact-icon">⚱️</div>
            <h3>Crystal Skulls</h3>
            <p>Ancient quartz carvings with unexplained properties...</p>
          </div>
          <div className="artifact-item">
            <div className="artifact-icon">🗿</div>
            <h3>Antikythera Mechanism</h3>
            <p>Ancient Greek analog computer used to predict astronomical positions...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artifacts;
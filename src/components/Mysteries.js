import React from 'react';
import './Mysteries.css';

const Mysteries = () => {
  return (
    <div className="mysteries-page">
      <div className="mysterious-bg">
        <h1 className="page-title">Unsolved Mysteries</h1>
        <div className="mysteries-grid">
          <div className="mystery-item">
            <div className="mystery-icon">🔮</div>
            <h3>Bermuda Triangle</h3>
            <p>Unexplained disappearances in the Atlantic Ocean...</p>
          </div>
          <div className="mystery-item">
            <div className="mystery-icon">🗺️</div>
            <h3>Lost City of Atlantis</h3>
            <p>The legendary sunken civilization...</p>
          </div>
          <div className="mystery-item">
            <div className="mystery-icon">🌟</div>
            <h3>Nazca Lines</h3>
            <p>Ancient geoglyphs visible only from above...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mysteries;
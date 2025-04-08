import React from 'react';
import './GearSystem.css';

const GearSystem = () => {
  return (
    <div className="gear-system">
      <div className="gear driving"></div>
      <div className="gear driven"></div>
      <div className="gear driven-small"></div>
      <div className="gear-particles"></div>
    </div>
  );
};

export default GearSystem;
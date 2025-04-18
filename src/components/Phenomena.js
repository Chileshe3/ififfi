import React, { useState, useEffect } from 'react';
import './Phenomena.css';

const Phenomena = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const phenomena = [
    {
      id: 'time-slips',
      icon: '🌌',
      title: 'Time Slips',
      description: 'Unexplained temporal anomalies across history where individuals report experiencing different time periods momentarily...',
      color: '#00ffff'
    },
    {
      id: 'quantum-tunneling',
      icon: '🌊',
      title: 'Quantum Tunneling',
      description: 'Objects passing through solid matter defying conventional physics, observed in both quantum and macroscopic scales...',
      color: '#ff00ff'
    },
    {
      id: 'spectral-manifestations',
      icon: '👻',
      title: 'Spectral Manifestations',
      description: 'Documented cases of ethereal appearances across cultures, often associated with emotional imprints or residual energy...',
      color: '#ffff00'
    },
    {
      id: 'spontaneous-combustion',
      icon: '🔥',
      title: 'Spontaneous Combustion',
      description: 'Rare cases where objects or even humans ignite without apparent external sources of ignition...',
      color: '#ff5500'
    },
    {
      id: 'consciousness-shifts',
      icon: '🧠',
      title: 'Consciousness Shifts',
      description: 'Documented episodes where individuals temporarily access heightened states of awareness or perception...',
      color: '#88ff00'
    },
    {
      id: 'dimensional-intersections',
      icon: '🌀',
      title: 'Dimensional Intersections',
      description: 'Reports of overlapping realities where objects or environments from different dimensions briefly coexist...',
      color: '#00aaff'
    }
  ];
  
  // Animation for items appearing on page load
  useEffect(() => {
    const items = document.querySelectorAll('.phenomenon-item');
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, 150 * index);
    });
  }, []);

  return (
    <div className="phenomena-page">
      <div className="mysterious-bg">
        <div className="energy-particle"></div>
        <div className="energy-particle"></div>
        <div className="energy-particle"></div>
        
        <h1 className="page-title">Mysterious Phenomena</h1>
        <p className="page-subtitle">Documented occurrences that defy conventional explanation</p>
        
        <div className="phenomena-grid">
          {phenomena.map((phenomenon, index) => (
            <div 
              key={phenomenon.id}
              className="phenomenon-item"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{ 
                '--item-color': phenomenon.color,
                '--item-delay': `${index * 0.1}s`
              }}
            >
              <div className="phenomenon-content">
                <div className="phenomenon-icon">
                  <span>{phenomenon.icon}</span>
                  <div className="icon-glow"></div>
                </div>
                <h3>{phenomenon.title}</h3>
                <p>{phenomenon.description}</p>
                <button className="learn-more-btn">Explore Further</button>
              </div>
              <div className="phenomenon-border"></div>
            </div>
          ))}
        </div>
        
        <div className="connection-lines">
          {/* SVG connection lines could be added here */}
        </div>
      </div>
    </div>
  );
};

export default Phenomena;
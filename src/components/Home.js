import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GearSystem from './GearSystem';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);

  const handleStoryClick = (storyId) => {
    navigate(`/story/${storyId}`);
  };

  const mysteries = [
    {
      id: 'computer-limits',
      title: 'Will computers reach their Limits?',
      description: 'Deep dive into the potential of computers',
      color: '#61dafb'
    },
    {
      id: 'quantum-anomalies',
      title: 'Quantum Anomalies',
      description: 'Phenomena that challenge our understanding of physics...',
      color: '#9e61fb'
    },
    {
      id: 'dimensional-rifts',
      title: 'Dimensional Rifts',
      description: 'Gateways between worlds that appear and vanish...',
      color: '#fb6161'
    },
    {
      id: 'cosmic-echoes',
      title: 'Cosmic Echoes',
      description: 'Strange signals from deep space that defy explanation...',
      color: '#61fb8d'
    },
    {
      id: 'time-slips',
      title: 'Time Slips',
      description: 'Moments where past and present mysteriously intersect...',
      color: '#fbd261'
    },
    {
      id: 'forbidden-knowledge',
      title: 'Forbidden Knowledge',
      description: 'Ancient wisdom that challenges modern understanding...',
      color: '#fb61d2'
    },
    {
      id: 'energy-vortexes',
      title: 'Energy Vortexes',
      description: 'Powerful locations where reality seems to bend...',
      color: '#61d2fb'
    },
    {
      id: 'suns-stars',
      title: 'Suns and Stars',
      description: 'To the edge of the universe and back, endure and survive...',
      secondaryDescription: 'Introduced to something called "Not being able to breathe"',
      color: '#fbcf61'
    },
    {
      id: 'conscious-evolution',
      title: 'Conscious Evolution',
      description: 'Unexplained leaps in human consciousness and ability...',
      color: '#61fb61'
    }
  ];

  // Add fade-in animation on component mount
  useEffect(() => {
    const items = document.querySelectorAll('.mystery-item');
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, 100 * index);
    });
  }, []);

  return (
    <div className="home">
      <div className="mysterious-bg">
        <GearSystem />
        <div className="floating-orb"></div>
        <div className="quote-banner">
          <p>"In the depths of reality, mysteries await those who dare to seek."</p>
        </div>
        <main className="content">
          <ul className="mystery-list">
            {mysteries.map((mystery) => (
              <li 
                key={mystery.id}
                className="mystery-item" 
                onClick={() => handleStoryClick(mystery.id)}
                onMouseEnter={() => setActiveItem(mystery.id)}
                onMouseLeave={() => setActiveItem(null)}
                style={{ 
                  '--accent-color': mystery.color,
                  opacity: activeItem && activeItem !== mystery.id ? 0.7 : 1
                }}
              >
                <div className="mystery-icon">
                  <span className="story-icon">✧</span>
                </div>
                <div className="mystery-content">
                  <h2>{mystery.title}</h2>
                  <p>{mystery.description}</p>
                  {mystery.secondaryDescription && (
                    <p className="secondary-description">{mystery.secondaryDescription}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}

export default Home;
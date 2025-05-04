import React, { useEffect, useState, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import GearSystem from './GearSystem';
import '../styles/Home.css';
import { MoreHorizontal } from 'lucide-react';

// Memoized image component for performance 
const MysteryImage = memo(({ image, title }) => (
  <div className="mystery-image">
    {image && <img src={image} alt={title} loading="lazy" />}
  </div>
));

// Extract mystery item to its own component for better code organization
const MysteryItem = memo(({ mystery, isActive, onClick, onMouseEnter, onMouseLeave }) => (
  <motion.li 
    className={`mystery-item ${isActive ? 'active' : ''}`}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    style={{ '--accent-color': mystery.color }}
  >
    <h2>{mystery.title}</h2>
    <p className="primary-description">{mystery.description}</p>
    {mystery.secondaryDescription && (
      <p className="secondary-description">{mystery.secondaryDescription}</p>
    )}
    {mystery.image && <MysteryImage image={mystery.image} title={mystery.title} />}
  </motion.li>
));

const MYSTERIES_DATA = [
  {
    id: 'computer-limits',
    title: 'Will Computers Reach Their Limits?',
    description: 'Exploring the boundaries of computational power and the future of technology',
    color: '#61dafb',
    image: require('./images/istockphoto-1468266144-1024x1024.jpg')
  },
  {
    id: 'quantum-anomalies',
    title: 'Quantum Anomalies',
    description: 'Phenomena that challenge our fundamental understanding of quantum physics',
    color: '#9e61fb',
    image: '/images/quantum-anomalies.jpg'
  },
  {
    id: 'dimensional-rifts',
    title: 'Dimensional Rifts',
    description: 'Theoretical gateways between parallel worlds that appear and vanish inexplicably',
    color: '#fb6161'
  },
  {
    id: 'cosmic-echoes',
    title: 'Cosmic Echoes',
    description: 'Unexplained signals from deep space that defy conventional astronomical analysis',
    color: '#61fb8d'
  },
  {
    id: 'time-slips',
    title: 'Time Slips',
    description: 'Documented moments where past and present mysteriously intersect in our reality',
    color: '#fbd261'
  },
  {
    id: 'forbidden-knowledge',
    title: 'Forbidden Knowledge',
    description: 'Ancient wisdom and scientific discoveries that challenge modern understanding',
    color: '#fb61d2'
  },
  {
    id: 'energy-vortexes',
    title: 'Energy Vortexes',
    description: 'Locations of extraordinary power where the laws of physics appear to bend',
    color: '#61d2fb'
  },
  {
    id: 'suns-stars',
    title: 'Suns and Stars',
    description: 'Journey to the edge of the universe and back, a tale of endurance and survival',
    secondaryDescription: 'Introduced to something called "Not being able to breathe"',
    color: '#fbcf61'
  },
  {
    id: 'conscious-evolution',
    title: 'Conscious Evolution',
    description: 'Investigating unexplained leaps in human consciousness throughout history',
    color: '#61fb61'
  }
];

function Home() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Improved navigation handler with useCallback for better performance
  const handleStoryClick = useCallback((storyId) => {
    navigate(`/story/${storyId}`);
  }, [navigate]);
  
  const handleMouseEnter = useCallback((id) => {
    setActiveItem(id);
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    setActiveItem(null);
  }, []);

  // Simulate loading state for smoother user experience
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <div className="mysterious-bg">
        <GearSystem />
        
        <section className="hero">
          <h1>Unravel the Mysteries</h1>
          <p>Discover the unknown and explore the boundaries of reality</p>
          <button className="cta-button">Get Started</button>
        </section>

        <section className="features">
          {MYSTERIES_DATA.slice(0, 4).map((mystery) => (
            <div key={mystery.id} className="feature-item">
              <h3>{mystery.title}</h3>
              <p>{mystery.description}</p>
            </div>
          ))}
        </section>

        <section className="cta-section">
          <h2>Ready to Dive Deeper?</h2>
          <p>Embark on a journey to uncover the secrets of the universe.</p>
          <button className="cta-button">Explore Mysteries</button>
        </section>

        <main className="content">
          {isLoading ? (
            <div className="loading-container">
              <div className="loader"></div>
              <p>Unveiling mysteries...</p>
            </div>
          ) : (
            <ul className="mystery-list">
              <AnimatePresence>
                {MYSTERIES_DATA.map(mystery => (
                  <MysteryItem 
                    key={mystery.id}
                    mystery={mystery}
                    isActive={activeItem === mystery.id}
                    onClick={() => handleStoryClick(mystery.id)}
                    onMouseEnter={() => handleMouseEnter(mystery.id)}
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
              </AnimatePresence>
            </ul>
          )}
        </main>
      </div>
    </div>
  );
}

export default Home;
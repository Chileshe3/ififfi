import React, { useEffect, useState, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import GearSystem from './GearSystem';
import '../styles/Home.css';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

const MysteryItem = memo(({ mystery, isActive, onClick, onMouseEnter, onMouseLeave }) => (
  <motion.li 
    className={`mystery-item ${isActive ? 'active' : ''}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    style={{ '--accent-color': mystery.color || '#61dafb' }}
  >
    <h2>{mystery.title}</h2>
    <p className="primary-description">{mystery.description}</p>
    
    {mystery.secondaryDescription && (
      <p className="secondary-description">{mystery.secondaryDescription}</p>
    )}
    
    <button 
      className="learn-more-btn"
      onClick={() => onClick(mystery.id)}
    >
      Learn More <ArrowRight size={16} />
    </button>
  </motion.li>
));

const MYSTERIES_DATA = [
  {
    id: 'computer-limits',
    title: 'Will Computers Reach Their Limits?',
    description: 'Exploring the boundaries of computational power and the future of technology',
    
  },
  {
    id: 'quantum-anomalies',
    title: 'Quantum Anomalies',
    description: 'Phenomena that challenge our fundamental understanding of quantum physics',
    
  },
  {
    id: 'dimensional-rifts',
    title: 'Dimensional Rifts',
    description: 'Theoretical gateways between parallel worlds that appear and vanish inexplicably',
    
  },
  {
    id: 'cosmic-echoes',
    title: 'Cosmic Echoes',
    description: 'Unexplained signals from deep space that defy conventional astronomical analysis',
  },
  {
    id: 'time-slips',
    title: 'Time Slips',
    description: 'Documented moments where past and present mysteriously intersect in our reality',
  },
  {
    id: 'forbidden-knowledge',
    title: 'Forbidden Knowledge',
    description: 'Ancient wisdom and scientific discoveries that challenge modern understanding',
  },
  {
    id: 'energy-vortexes',
    title: 'Energy Vortexes',
    description: 'Locations of extraordinary power where the laws of physics appear to bend',
  },
  {
    id: 'suns-stars',
    title: 'Suns and Stars',
    description: 'Journey to the edge of the universe and back, a tale of endurance and survival',
    secondaryDescription: 'Introduced to something called "Not being able to breathe"',
  },
  {
    id: 'conscious-evolution',
    title: 'Conscious Evolution',
    description: 'Investigating unexplained leaps in human consciousness throughout history',
  }
];

function Home() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const handleStoryClick = useCallback((storyId) => {
    navigate(`/story/${storyId}`);
  }, [navigate]);
  
  const handleMouseEnter = useCallback((id) => {
    setActiveItem(id);
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    setActiveItem(null);
  }, []);

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
        
        <div className="floating-orb"></div>
        
        <main className="content">
          {isLoading ? (
            <div className="loading-container">
              <Logo />
              <div className="loader"></div>
            </div>
          ) : (
            <ul className="mystery-list">
              <AnimatePresence>
                {MYSTERIES_DATA.map(mystery => (
                  <MysteryItem 
                    key={mystery.id}
                    mystery={mystery}
                    isActive={activeItem === mystery.id}
                    onClick={handleStoryClick}
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
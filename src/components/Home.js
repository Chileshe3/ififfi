import React from 'react';
import { useNavigate } from 'react-router-dom';
import GearSystem from './GearSystem';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  const handleStoryClick = (storyId) => {
    navigate(`/story/${storyId}`);
  };

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
            <li className="mystery-item" onClick={() => handleStoryClick('ancient-mysteries')}>
              <h2>Ancient Mysteries</h2>
              <p>Unexplainable artifacts that defy historical understanding...</p>
            </li>
            <li className="mystery-item" onClick={() => handleStoryClick('quantum-anomalies')}>
              <h2>Quantum Anomalies</h2>
              <p>Phenomena that challenge our understanding of physics...</p>
            </li>
            <li className="mystery-item" onClick={() => handleStoryClick('dimensional-rifts')}>
              <h2>Dimensional Rifts</h2>
              <p>Gateways between worlds that appear and vanish...</p>
            </li>
            <li className="mystery-item" onClick={() => handleStoryClick('cosmic-echoes')}>
              <h2>Cosmic Echoes</h2>
              <p>Strange signals from deep space that defy explanation...</p>
            </li>
            <li className="mystery-item" onClick={() => handleStoryClick('time-slips')}>
              <h2>Time Slips</h2>
              <p>Moments where past and present mysteriously intersect...</p>
            </li>
            <li className="mystery-item" onClick={() => handleStoryClick('forbidden-knowledge')}>
              <h2>Forbidden Knowledge</h2>
              <p>Ancient wisdom that challenges modern understanding...</p>
            </li>
            <li className="mystery-item" onClick={() => handleStoryClick('energy-vortexes')}>
              <h2>Energy Vortexes</h2>
              <p>Powerful locations where reality seems to bend...</p>
            </li>
            <li className="mystery-item" onClick={() => handleStoryClick('conscious-evolution')}>
              <h2>Conscious Evolution</h2>
              <p>Unexplained leaps in human consciousness and ability...</p>
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
}

export default Home;
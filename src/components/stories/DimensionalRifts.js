import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Story.css';

function DimensionalRifts() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Apply fade-in effect when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`story-container ${isVisible ? 'visible' : ''}`}>
      <button className="back-button" onClick={() => navigate('/')}>
        <span aria-hidden="true">←</span> 
      </button>
      <h1 className="story-title">Dimensional Rifts</h1>
      <div className="story-sections">
        <section className="story-section">
          
      
        
      
      
      <div className='story-p'>
          <h2>The First Discovery</h2>
          <p>"Reality is not only stranger than we suppose, but stranger than we can suppose."</p>

            <p>Deep within the Siberian wilderness, researchers encountered something that defied explanation. The very fabric of spacetime seemed to fold upon itself, creating what scientists now call a "dimensional rift" — a tear in reality that connects our universe to... somewhere else.</p>
            
          </div>

        <div className='story-p'>
          <h2>Scientific Analysis</h2>
              <p>When exposed to the dimensional rifts, standard quantum physics breaks down. Particles exhibit behaviors that cannot be explained by our current understanding of the universe. Gravity intensifies near the rifts, and time itself seems to flow differently within their vicinity.</p>
              
                <p>Gravitational anomalies exceeding 300% normal measurements</p>
                <p>Time dilation effects observed at macroscopic scales</p>
                <p>Quantum entanglement patterns that defy the speed of light</p>
                <p>Unexplained energy signatures with no known source</p>
              
          </div>
        
        
        <div className='story-p'>
          <h2>Theoretical Implications</h2>
          
            <p>If dimensional rifts truly connect our universe to others, the implications for physics, philosophy, and our understanding of consciousness are profound. Are these other dimensions similar to ours? Do they operate under the same physical laws? What might exist beyond our perception?</p>
      
        <p>As we continue to study these anomalies, one thing becomes increasingly clear: our universe is far more complex and interconnected than we ever imagined. The boundaries between dimensions may be more permeable than solid, suggesting that reality itself might be a matter of perspective.</p>
        </div>
        </section>
      </div>
    </div>
    

  );
}

export default DimensionalRifts;
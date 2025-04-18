import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Story.css';

function DimensionalRifts() {
  const navigate = useNavigate();
  const contentRef = useRef(null);
  
  // Add scroll reveal animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const sections = contentRef.current.querySelectorAll('.story-section, .story-chapter');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="story-container" ref={contentRef}>
      <button className="back-button" onClick={() => navigate('/')}>
        <span aria-hidden="true">←</span> Back
      </button>
      
      <h1 className="story-title">Dimensional Rifts</h1>
      
      <div className="story-quote">
        <p>"Reality is not only stranger than we suppose, but stranger than we can suppose."</p>
        <cite className="quote-author">— J.B.S. Haldane</cite>
      </div>
      
      <div className="story-sections">
        <section className="story-section">
          <h2>The First Discovery</h2>
          <div className="section-content">
            <p>Deep within the Siberian wilderness, researchers encountered something that defied explanation. The very fabric of spacetime seemed to fold upon itself, creating what scientists now call a "dimensional rift" — a tear in reality that connects our universe to... somewhere else.</p>
            <div className="image-container">
              <img src="/api/placeholder/500/300" alt="The First Dimensional Rift" />
            </div>
          </div>
          <blockquote className="field-note">
            "The instruments went haywire. The very fabric of space seemed to ripple before our eyes."
            <footer>— Dr. Elena Petrova, Lead Researcher</footer>
          </blockquote>
        </section>

        <section className="story-section">
          <h2>Scientific Analysis</h2>
          <div className="section-content">
            <div className="data-visualization">
              <p>When exposed to the dimensional rifts, standard quantum physics breaks down. Particles exhibit behaviors that cannot be explained by our current understanding of the universe. Gravity intensifies near the rifts, and time itself seems to flow differently within their vicinity.</p>
              <ul className="phenomenon-list">
                <li>Gravitational anomalies exceeding 300% normal measurements</li>
                <li>Time dilation effects observed at macroscopic scales</li>
                <li>Quantum entanglement patterns that defy the speed of light</li>
                <li>Unexplained energy signatures with no known source</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="story-section">
          <h2>Theoretical Implications</h2>
          <div className="section-content">
            <p>If dimensional rifts truly connect our universe to others, the implications for physics, philosophy, and our understanding of consciousness are profound. Are these other dimensions similar to ours? Do they operate under the same physical laws? What might exist beyond our perception?</p>
            <div className="image-container">
              <img src="/api/placeholder/500/300" alt="Theoretical model of dimensional connections" />
            </div>
          </div>
        </section>
      </div>

      <div className="story-conclusion">
        <p>As we continue to study these anomalies, one thing becomes increasingly clear: our universe is far more complex and interconnected than we ever imagined. The boundaries between dimensions may be more permeable than solid, suggesting that reality itself might be a matter of perspective.</p>
      </div>
    </div>
  );
}

export default DimensionalRifts;
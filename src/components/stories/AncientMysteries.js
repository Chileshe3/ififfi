import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Story.css';

function AncientMysteries() {
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
        <span aria-hidden="true">←</span> Back
      </button>
      
      <h1 className="story-title">Ancient Mysteries</h1>
      
      <div className="story-sections">
        <section className="story-section">
          <h2>The Lost Library</h2>
          <div className="section-content">
            <p>
              Deep beneath the sands of Alexandria, archaeologists discovered evidence of a vast repository 
              of knowledge that predates known civilization. Carbon dating suggests some scrolls may be up to 
              12,000 years old—challenging our entire understanding of human history and technological development.
            </p>
            <div className="image-container">
              <img src="/api/placeholder/500/300" alt="Ancient Library Ruins" />
            </div>
          </div>
        </section>
        
        <section className="story-section">
          <h2>Unexplained Artifacts</h2>
          <div className="section-content">
            <p>
              Objects found in impossible geological strata challenge our understanding of human history. 
              The Baghdad Battery, the Antikythera Mechanism, and numerous other artifacts suggest our 
              ancestors possessed technological knowledge far beyond what conventional history acknowledges.
            </p>
            <div className="image-container">
              <img src="/api/placeholder/500/300" alt="Mysterious ancient artifacts" />
            </div>
          </div>
        </section>
        
        <section className="story-section">
          <h2>Megalithic Precision</h2>
          <div className="section-content">
            <p>
              From Puma Punku to the Great Pyramid, ancient builders achieved levels of precision that would 
              challenge modern engineering capabilities. Massive stone blocks weighing hundreds of tons were 
              transported and fitted together with submillimeter accuracy—without modern tools or machinery.
            </p>
            <div className="image-container">
              <img src="/api/placeholder/500/300" alt="Megalithic architecture" />
            </div>
          </div>
        </section>
        
        <section className="story-section">
          <h2>Ancient Star Maps</h2>
          <div className="section-content">
            <p>
              Cave paintings and ancient tablets across continents display eerily similar celestial maps, 
              often depicting star systems not visible to the naked eye. Many show the Pleiades with special 
              significance, along with astronomical knowledge that would require sophisticated observation equipment.
            </p>
            <div className="image-container">
              <img src="/api/placeholder/500/300" alt="Ancient astronomical charts" />
            </div>
          </div>
        </section>
      </div>
      
      <div className="story-conclusion">
        <p>
          As we uncover more evidence, the timeline of human civilization becomes increasingly complex. 
          Perhaps our understanding of history follows a linear progression not because that's how events 
          unfolded, but because it's how we've chosen to interpret the fragments that remain. What if human 
          history is not a straight line, but a cycle of advancement and reset?
        </p>
      </div>
    </div>
  );
}

export default AncientMysteries;
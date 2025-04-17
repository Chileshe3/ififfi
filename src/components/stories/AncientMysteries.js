import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Story.css';

function AncientMysteries() {
  const navigate = useNavigate();

  return (
    <div className="story-container">
      <button className="back-button" onClick={() => navigate('/')}>← Back</button>
      <h1 className="story-title">Ancient Mysteries</h1>
      <div className="story-sections">
        <section className="story-section">
          <h2>The Lost Library</h2>
          <div className="section-content">
            <p>Deep beneath the sands of Alexandria, archaeologists discovered evidence of a vast repository of knowledge that predates known civilization...</p>
            <div className="image-container">
              <img src="/images/ancient-library.jpg" alt="Ancient Library Ruins" />
            </div>
          </div>
        </section>

        <section className="story-section">
          <h2>Unexplained Artifacts</h2>
          <div className="section-content">
            <p>Objects found in impossible geological strata challenge our understanding of human history...</p>
          </div>
        </section>
      </div>
      
      <div className="story-conclusion">
        <p>As we uncover more evidence, the timeline of human civilization becomes increasingly complex...</p>
      </div>
    </div>
  );
}

export default AncientMysteries;

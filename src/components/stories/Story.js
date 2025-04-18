import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/Story.css';

const Story = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  // Simulate loading a story
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="story-container">
      <button className="back-button" onClick={() => navigate('/')}>
        <span aria-hidden="true">←</span> Back
      </button>
      
      <h1 className="story-title">{loading ? `Loading story: ${id}...` : `Story: ${id}`}</h1>
      
      <div className="story-sections">
        {loading ? (
          <section className="story-section">
            <h2>Loading Story...</h2>
            <div className="section-content">
              <p>Please wait while we prepare your story experience...</p>
            </div>
          </section>
        ) : (
          <>
            <section className="story-section">
              <h2>Chapter One</h2>
              <div className="section-content">
                <p>The story begins in a world not unlike our own, yet distinctly different in ways that challenge perception...</p>
                <div className="image-container">
                  <img src={`/api/placeholder/400/300`} alt="Story chapter visual" />
                </div>
              </div>
            </section>
            
            <section className="story-section">
              <h2>Chapter Two</h2>
              <div className="section-content">
                <p>As our protagonist ventures further, the boundaries between reality and fiction begin to blur...</p>
                <div className="image-container">
                  <img src={`/api/placeholder/400/300`} alt="Story progression" />
                </div>
              </div>
            </section>
          </>
        )}
      </div>
      
      {!loading && (
        <div className="story-conclusion">
          <p>Every story has a beginning, middle, and end—but not necessarily in that order.</p>
        </div>
      )}
    </div>
  );
};

export default Story;
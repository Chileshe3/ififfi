import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/Story.css';

const Story = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="story-container">
      <button className="back-button" onClick={() => navigate('/')}>← Back</button>
      <h1 className="story-title">Story: {id}</h1>
      <div className="story-sections">
        <section className="story-section">
          <h2>Loading Story...</h2>
        </section>
      </div>
    </div>
  );
};

export default Story;

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/Story.css';

const storyData = {
  'ancient-mysteries': {
    title: 'Ancient Mysteries',
    sections: [
      {
        title: 'The Antikythera Mechanism',
        content: `Discovered in 1901 in a Roman-era shipwreck, this ancient Greek device has been called the world's first computer. 
        Dating back to approximately 100-150 BC, this sophisticated mechanical calculator could track astronomical phenomena with remarkable precision.
        The device contains at least 30 gears arranged in a complex system that could model the movements of celestial bodies.`,
        image: '/images/antikythera.jpg'
      },
      {
        title: 'The Baghdad Battery',
        content: `Found in Khujut Rabu, these clay pots containing copper cylinders and iron rods have puzzled archaeologists since their discovery.
        Dating back to the Parthian period (250 BC - 224 AD), these artifacts suggest an understanding of electrical principles long before their official discovery.
        Experiments have shown that these devices could produce small electrical charges when filled with vinegar or other electrolytic solutions.`,
        image: '/images/baghdad-battery.jpg'
      },
      {
        title: 'The Mysterious Spheres of Costa Rica',
        content: `Hundreds of perfectly spherical stones, ranging from a few centimeters to over 2 meters in diameter, dot the landscape of Costa Rica.
        Created with incredible precision by ancient civilizations, these stones remain a mystery in terms of their purpose and method of creation.
        Some theories suggest they were used for astronomical alignments, while others believe they marked important locations or had ceremonial significance.`,
        image: '/images/costa-rica-spheres.jpg'
      }
    ],
    conclusion: `These artifacts challenge our understanding of ancient technological capabilities and suggest that advanced knowledge may have been lost to time.
    Their existence raises questions about the true extent of ancient civilizations' understanding of science and engineering.`
  }
  // Add other stories here with similar structure
};

function Story() {
  const { id } = useParams();
  const navigate = useNavigate();
  const story = storyData[id];

  if (!story) {
    return (
      <div className="story-error">
        <h2>Story Not Found</h2>
        <button onClick={() => navigate('/')}>Return Home</button>
      </div>
    );
  }

  return (
    <div className="story-container">
      <button className="back-button" onClick={() => navigate('/')}>← Back</button>
      <h1 className="story-title">{story.title}</h1>
      <div className="story-sections">
        {story.sections.map((section, index) => (
          <section key={index} className="story-section">
            <h2>{section.title}</h2>
            <div className="section-content">
              <p>{section.content}</p>
              {section.image && (
                <div className="section-image">
                  <img src={section.image} alt={section.title} />
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
      <div className="story-conclusion">
        <p>{story.conclusion}</p>
      </div>
    </div>
  );
}

export default Story;

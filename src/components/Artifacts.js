import React, { useState, useEffect, useRef } from 'react';
import './Artifacts.css';

const Artifacts = () => {
  const [selectedArtifact, setSelectedArtifact] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const pageRef = useRef(null);
  const audioRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (pageRef.current) {
      const rect = pageRef.current.getBoundingClientRect();
      setCursorPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  useEffect(() => {
    // Reveal animation for artifacts
    const artifacts = document.querySelectorAll('.artifact-item');
    artifacts.forEach((artifact, index) => {
      setTimeout(() => {
        artifact.classList.add('revealed');
      }, 200 * index);
    });
    
    // Initialize audio
    audioRef.current = new Audio();
    audioRef.current.volume = 0.1;
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const playArtifactSound = (type) => {
    if (audioRef.current) {
      // In a real app, would use actual sound files
      const sounds = {
        manuscript: 'whispers',
        skull: 'crystal',
        mechanism: 'gears',
        tablet: 'ancient',
        stone: 'humming',
        idol: 'chanting',
        mirror: 'echoes',
        staff: 'energy',
        sphere: 'otherworldly'
      };
      
      audioRef.current.pause();
      // Would set audioRef.current.src to the appropriate sound file
      audioRef.current.play().catch(e => console.log('Audio play prevented'));
    }
  };

  const artifacts = [
    {
      id: 'voynich',
      name: 'Voynich Manuscript',
      icon: '📜',
      type: 'manuscript',
      origin: 'Unknown Origin, 15th Century',
      description: 'An illustrated codex written in an unknown writing system. Attempts to decipher it have failed for centuries. Contains bizarre botanical illustrations and astronomical charts that don\'t match any known celestial alignments.',
      powers: 'Said to induce vivid dreams of forgotten languages in those who sleep near it.',
      danger: 'Medium',
      location: 'Beinecke Rare Book Library, Yale University',
      additionalInfo: 'Carbon dating places its creation between 1404-1438, but its alphabet matches no known language. Some pages only become visible under specific wavelengths of light not discovered until the 20th century.'
    },
    {
      id: 'crystal-skulls',
      name: 'Crystal Skulls',
      icon: '💀',
      type: 'skull',
      origin: 'Disputed Origin, Pre-Columbian Era',
      description: 'Ancient quartz carvings with unexplained properties. Perfectly carved from single crystal pieces, showing no tool marks. Modern analysis suggests some may be more recent fabrications, but others defy conventional dating methods.',
      powers: 'Reports suggest they emit measurable energy fields and can influence electronic equipment within proximity.',
      danger: 'Low',
      location: 'Various museums and private collections worldwide',
      additionalInfo: 'When arranged in specific geometric patterns, observers report spontaneous visions and altered states of consciousness. Temperature measurements show they maintain constant temperature regardless of environment.'
    },
    {
      id: 'antikythera',
      name: 'Antikythera Mechanism',
      icon: '⚙️',
      type: 'mechanism',
      origin: 'Ancient Greece, 100-200 BCE',
      description: 'Ancient Greek analog computer used to predict astronomical positions and eclipses decades in advance. Contains at least 30 gears in a precision arrangement that was not matched until the 14th century.',
      powers: 'When reconstructed perfectly, calculations suggest it could predict astronomical events not yet recorded in modern astronomy.',
      danger: 'Low',
      location: 'National Archaeological Museum of Athens',
      additionalInfo: 'Recent X-ray analysis revealed previously unseen inscriptions referencing celestial bodies unknown to ancient Greeks. The mechanism contains mathematical constants not rediscovered until Kepler\'s time.'
    },
    {
      id: 'emerald-tablet',
      name: 'Emerald Tablet',
      icon: '📊',
      type: 'tablet',
      origin: 'Allegedly Pre-Egyptian, Unknown Date',
      description: 'A legendary emerald tablet inscribed with the secrets of the universe in Phoenician text. Said to contain the formula for the philosopher\'s stone and the fundamental principles of alchemy and transformation.',
      powers: 'Supposedly grants insight into the nature of reality and the transmutation of elements.',
      danger: 'High',
      location: 'Unknown - possibly destroyed or hidden',
      additionalInfo: 'Text fragments translated from Arabic sources contain mathematical formulas that align with quantum field theory, centuries before such concepts existed. The tablet reportedly glows from within under moonlight.'
    },
    {
      id: 'gobekli-stone',
      name: 'Göbekli Tepe Stones',
      icon: '🗿',
      type: 'stone',
      origin: 'Southern Turkey, 10,000+ BCE',
      description: 'Megalithic structures older than agriculture itself, featuring perfect astronomical alignments and carved animal figures. Predates Stonehenge by 6,000 years. No known explanation for how prehistoric humans built such precisely aligned structures.',
      powers: 'Stone density measurements fluctuate during specific astronomical alignments.',
      danger: 'Unknown',
      location: 'Göbekli Tepe, Turkey',
      additionalInfo: 'Contains encoded star maps predicting celestial events thousands of years in the future. Inexplicable radiation patterns emerge during summer solstice. Ground-penetrating radar shows cavities beneath containing materials not matching any known element.'
    },
    {
      id: 'ubaid-idols',
      name: 'Ubaid Lizardman Idols',
      icon: '🦎',
      type: 'idol',
      origin: 'Mesopotamia, 6,000 BCE',
      description: 'Humanoid figurines with reptilian features from the Ubaid period. Depicts beings with elongated heads, almond-shaped eyes, and lizard-like characteristics in positions of authority over humans.',
      powers: 'Clay composition includes unknown mineral compounds that affect magnetic fields.',
      danger: 'Medium',
      location: 'Various museums in Iraq, Syria and Europe',
      additionalInfo: 'DNA analysis of residue found on some figurines contains unidentified genetic sequences. When aligned in specific patterns, they reportedly influence the growth rate of nearby reptile species. Some researchers report hearing whispers when alone with the artifacts.'
    },
    {
      id: 'flying-machines',
      name: 'Saqqara Bird',
      icon: '🦅',
      type: 'idol',
      origin: 'Ancient Egypt, 200 BCE',
      description: 'A wooden artifact resembling a bird but with aerodynamic properties of modern aircraft. Wind tunnel tests confirmed its ability to generate lift. Suggests ancient understanding of aerodynamics thousands of years before modern aviation.',
      powers: 'Scale models based on its design achieve flight with minimal modification.',
      danger: 'Low',
      location: 'Egyptian Museum of Antiquities, Cairo',
      additionalInfo: 'Inscriptions on the base contain mathematical ratios matching those used in modern aerospace engineering. Wood contains traces of metallic compounds not typically used in Egyptian artifacts, providing unusual structural integrity.'
    },
    {
      id: 'black-mirror',
      name: 'Obsidian Black Mirror',
      icon: '🪞',
      type: 'mirror',
      origin: 'Ancient Maya/Aztec Civilizations',
      description: 'Polished obsidian mirrors used by Mesoamerican priests for divination and communion with other realms. Surface properties create unusual optical effects not replicated in modern materials.',
      powers: 'Said to reveal glimpses of possible futures and distant locations when used under specific astronomical conditions.',
      danger: 'High',
      location: 'British Museum and private collections',
      additionalInfo: 'Spectroscopic analysis shows the mirrors absorb and re-emit light at wavelengths outside normal parameters. Test subjects report identical hallucinations when viewing the mirrors in complete darkness. Electronic equipment often malfunctions in proximity.'
    },
    {
      id: 'dropa-stones',
      name: 'Dropa Stones',
      icon: '💿',
      type: 'stone',
      origin: 'Baian-Kara-Ula Mountains, 12,000 BCE',
      description: 'Disk-shaped stones with microscopic hieroglyphs found in caves along the China-Tibet border. Each stone contains a double spiral of tiny characters visible only under magnification, describing visitors from beyond the stars.',
      powers: 'Emit unusual vibrations at specific frequencies that affect brain wave patterns.',
      danger: 'Medium',
      location: 'Disputed - possibly in Beijing University archives',
      additionalInfo: 'Material composition includes crystalline structures impossible to reproduce with current technology. Hieroglyphs describe astronomical events confirmed to have occurred thousands of years after their alleged creation. Exposure causes temporal perception distortions in laboratory settings.'
    },
    {
      id: 'longyou-caves',
      name: 'Longyou Caves',
      icon: '🗿',
      type: 'stone',
      origin: 'Zhejiang Province, China, Unknown Date',
      description: 'Massive artificial caves carved with perfect precision and symmetry. Over a million cubic meters of rock removed without any record of their creation. Walls contain mysterious parallel lines cut with mathematical precision.',
      powers: 'Exceptional acoustic properties that amplify certain frequencies while cancelling others.',
      danger: 'Low',
      location: 'Zhejiang Province, China',
      additionalInfo: 'Dating methods provide contradictory results ranging from 500 to 12,000 years old. Tool marks don\'t match any known ancient technology. Mathematical analysis of the layout corresponds to star positions that only occurred once every 26,000 years.'
    },
    {
      id: 'piri-reis',
      name: 'Piri Reis Map',
      icon: '🗺️',
      type: 'manuscript',
      origin: 'Ottoman Empire, 1513 CE',
      description: 'Ancient map showing coastlines of America, Africa, and Antarctica with impossible accuracy. Drawn before Antarctica was discovered and shows geological features under the ice cap only confirmed by modern ground-penetrating radar.',
      powers: 'Contains navigational markers that align with magnetic anomalies not discovered until the 21st century.',
      danger: 'Low',
      location: 'Topkapi Palace Museum, Istanbul',
      additionalInfo: 'Analysis reveals the use of spherical trigonometry and advanced mathematical projections beyond the knowledge of its time. Indicates land connections that existed only during the last ice age. Includes notations in an untranslatable script along certain coastlines.'
    },
    {
      id: 'starchild-skull',
      name: 'Starchild Skull',
      icon: '👽',
      type: 'skull',
      origin: 'Mexico, Estimated 900 CE',
      description: 'Unusual human-like skull with extraordinary properties - 50% larger eye sockets, misshapen but 20% more brain capacity. DNA testing produced anomalous results.',
      powers: 'Bone material demonstrates unexplained electromagnetic properties not seen in normal human remains.',
      danger: 'Medium',
      location: 'Private collection, undisclosed',
      additionalInfo: 'Bone composition significantly lighter and stronger than human bone. Contains rare trace elements including rhodium and ruthenium. Carbon dating methods provide inconsistent results, suggesting contamination or unknown preservation factors.'
    }
  ];

  const handleArtifactClick = (artifact) => {
    playArtifactSound(artifact.type);
    setSelectedArtifact(selectedArtifact?.id === artifact.id ? null : artifact);
  };

  const closeArtifactDetail = (e) => {
    e.stopPropagation();
    setSelectedArtifact(null);
  };

  return (
    <div 
      className="artifacts-page" 
      ref={pageRef}
      onMouseMove={handleMouseMove}
    >
      <div className="mysterious-bg">
        <div className="mystical-energy-orb" 
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`
          }}
        />
        
        <div className="ancient-symbols-overlay"></div>
        
        <div className="constellation-map">
          {artifacts.map((artifact, index) => (
            <div key={index} className="star-point" style={{ 
              left: `${15 + (index * 8)}%`, 
              top: `${20 + ((index % 3) * 20)}%`,
              animationDelay: `${index * 0.5}s`
            }}/>
          ))}
        </div>
        
        <div className="energy-line-container">
          <div className="energy-line horizontal"></div>
          <div className="energy-line vertical"></div>
          <div className="energy-line diagonal-1"></div>
          <div className="energy-line diagonal-2"></div>
        </div>
        
        <div className="mysterious-portal"></div>
        
        <h1 className="page-title">Ancient Artifacts</h1>
        <p className="page-subtitle">Enigmatic relics that challenge our understanding of history</p>
        
        <div className="filters-container">
          <div className="filter-btn active">All Artifacts</div>
          <div className="filter-btn">Ancient Technology</div>
          <div className="filter-btn">Ritualistic Items</div>
          <div className="filter-btn">Knowledge Repositories</div>
          <div className="filter-btn">Unknown Origin</div>
        </div>
        
        <div className="artifacts-grid">
          {artifacts.map((artifact, index) => (
            <div 
              key={artifact.id}
              className={`artifact-item ${selectedArtifact?.id === artifact.id ? 'expanded' : ''}`}
              onClick={() => handleArtifactClick(artifact)}
              data-danger={artifact.danger}
            >
              <div className="artifact-glow"></div>
              <div className="artifact-content">
                <div className="artifact-icon">{artifact.icon}</div>
                <h3>{artifact.name}</h3>
                <p className="artifact-origin">{artifact.origin}</p>
                <p className="artifact-description">{artifact.description}</p>
                <div className="artifact-properties">
                  <div className="artifact-property">
                    <span className="property-label">Danger Level:</span>
                    <span className={`property-value danger-${artifact.danger.toLowerCase()}`}>
                      {artifact.danger}
                    </span>
                  </div>
                  <div className="artifact-property">
                    <span className="property-label">Current Location:</span>
                    <span className="property-value">{artifact.location}</span>
                  </div>
                </div>
                <div className="read-more">See Full Analysis</div>
              </div>
              
              {selectedArtifact?.id === artifact.id && (
                <div className="artifact-detail-panel">
                  <div className="close-button" onClick={closeArtifactDetail}>×</div>
                  <h2>{artifact.name}</h2>
                  <div className="detail-icon">{artifact.icon}</div>
                  <div className="detail-section">
                    <h4>Origin</h4>
                    <p>{artifact.origin}</p>
                  </div>
                  <div className="detail-section">
                    <h4>Description</h4>
                    <p>{artifact.description}</p>
                  </div>
                  <div className="detail-section">
                    <h4>Reported Anomalous Properties</h4>
                    <p>{artifact.powers}</p>
                  </div>
                  <div className="detail-section">
                    <h4>Research Notes</h4>
                    <p>{artifact.additionalInfo}</p>
                  </div>
                  <div className="detail-section danger-section">
                    <h4>Containment Protocols</h4>
                    <p>Danger Classification: <span className={`danger-${artifact.danger.toLowerCase()}`}>{artifact.danger}</span></p>
                    <p>Storage requirements: Temperature controlled environment, minimal human contact, electromagnetic shielding recommended.</p>
                  </div>
                  <div className="connection-diagram">
                    <div className="diagram-title">Known Connections</div>
                    <div className="connections-map">
                      {/* Visualization would go here */}
                      <div className="connection-node primary"></div>
                      <div className="connection-node secondary"></div>
                      <div className="connection-node secondary"></div>
                      <div className="connection-line"></div>
                      <div className="connection-line"></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="artifact-energy-field"></div>
              <div className="rune-markings"></div>
              <div className="artifact-shadow"></div>
            </div>
          ))}
        </div>
        
        <div className="cosmic-connection-map">
          <div className="map-title">Theoretical Connection Web</div>
          <div className="map-content">
            <div className="central-node"></div>
            {[...Array(12)].map((_, i) => (
              <div key={i} className="connection-thread" style={{ 
                transform: `rotate(${i * 30}deg)`, 
                animationDelay: `${i * 0.2}s` 
              }}></div>
            ))}
          </div>
        </div>
        
        <div className="warning-footer">
          <div className="warning-symbol">⚠️</div>
          <p>The information contained within this archive is classified. Some artifacts may exhibit unexplained properties when studied extensively.</p>
        </div>
      </div>
    </div>
  );
};

export default Artifacts;
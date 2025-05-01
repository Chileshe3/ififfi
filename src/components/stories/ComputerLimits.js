import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Story.css';

function ComputerLimits() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
      
      <header className="story-header">
        <h1 className="story-title">Will Computers Reach Their Limits?</h1>
      </header>
      
      <section className="story-section">
        <h2>Behind the story</h2>
        <div className="section-content">
          <div className="story-p">
            <p>
              In the ever-evolving world of technology, one question looms large: How far can computers go? With advancements in microchips, transistors, and the development of nanotechnology, we are constantly pushing the boundaries of what computers can achieve. But as we continue to make progress, we must ask: when will computers reach their limits? Will there ever be a point when we can no longer make them faster, more powerful, or more efficient?
            </p>
            <p>
              The Evolution of Computing: From Transistors to Nanotech
            </p>
            <p>
              Computers as we know them today are built on transistors, which are the basic building blocks of modern processors. A transistor is essentially a tiny switch that can turn on and off to represent binary information (1s and 0s). These transistors are made of semiconducting materials like silicon and are embedded in microchips that power everything from smartphones to supercomputers.
            </p>
            <p>
              The progression of computing has followed a pattern outlined in Moore's Law, named after Gordon Moore, co-founder of Intel. Moore's Law predicts that the number of transistors on a microchip would double approximately every two years, leading to exponential increases in computing power. This exponential growth has been a guiding principle in the development of modern computers, with microprocessors becoming faster, smaller, and more efficient over time.
            </p>
          </div>
        </div>

        <h2>The Limits of Transistor Miniaturization</h2>
        <div className="section-content">
          <div className="story-p">
            <p>
              Currently, we are at a critical juncture in the development of microchips. Transistors have reached the 7-nanometer scale, with research and development pushing toward even smaller sizes, such as the 5-nanometer and 3-nanometer nodes. To give you a sense of scale, a nanometer is one-billionth of a meter, and the diameter of a human hair is about 80,000 to 100,000 nanometers.
            </p>
            <p>While smaller transistors offer more processing power, there are several challenges we face as we approach the atomic scale:</p>
            <ul className="phenomenon-list">
              <li><b>Quantum Effects:</b> As transistors become smaller, quantum effects such as quantum tunneling become more pronounced, leading to leakage currents and unpredictable behavior.</li>
              <li><b>Heat Dissipation:</b> Smaller transistors generate more heat in a smaller space, requiring more advanced cooling techniques.</li>
              <li><b>Manufacturing Limits:</b> The physical limits of current semiconductor manufacturing processes could pose another hurdle as transistors approach atomic size.</li>
            </ul>
          </div>
        </div>

        <h2>Nanotechnology: The Future of Computing</h2>
        <div className="section-content">
          <div className="story-p">
            <p>
              Enter nanotechnology—the manipulation of matter at the molecular or atomic level. Researchers are exploring how nanotechnology could unlock the next phase of computing by going beyond traditional silicon-based transistors.
            </p>
            <p>
              One of the most promising advancements in nanotechnology is the development of quantum computers. These computers rely on quantum bits (qubits) rather than traditional bits. Unlike classical bits, which are either 1 or 0, qubits can exist in multiple states simultaneously, thanks to a phenomenon called superposition.
            </p>
          </div>
        </div>
          
        <h2>Theoretical Limits: The End of Moore's Law?</h2>
        <div className="section-content">
          <div className="story-p">
            <p>
              As we approach the physical limits of transistor miniaturization, Moore's Law may eventually slow down, or even come to a halt. Beyond the 3-nanometer node, further reductions in size could become increasingly difficult due to the challenges mentioned earlier—quantum effects, heat dissipation, and manufacturing limitations.
            </p>
          </div>
        </div>

        <h2>Supercomputers: Pushing the Boundaries of Performance</h2>
        <div className="section-content">
          <div className="story-p">
            <p>
              While personal computing devices may eventually reach a plateau, supercomputers—which are designed for highly specialized, complex tasks—are continuing to evolve. Supercomputers leverage advanced architectures that combine thousands or even millions of processors to achieve tremendous computational power.
            </p>
          </div>
        </div>
          
        <h2>What Happens When We Reach the Limits of Classical Computing?</h2>
        <div className="section-content">
          <div className="story-p">
            <p><b>Several possibilities exist:</b></p>
            <ul className="phenomenon-list">
              <li><b>Quantum Computers:</b> They hold the promise of solving problems that are intractable for classical computers.</li>
              <li><b>AI and Neural Networks:</b> The rise of artificial intelligence and machine learning could drive future computing.</li>
              <li><b>Post-Silicon Computing:</b> Technologies like optical computing and DNA computing could offer radical new paradigms.</li>
            </ul>
          </div>
        </div>

        <h2>The Future of Computing: A Brave New World</h2>
        <div className="section-content">
          <div className="story-p">
            <p>
              While computers may eventually reach their limits with current technologies, the future holds vast potential for new breakthroughs. Whether it's through the development of quantum computers, advanced nanotechnology, neuromorphic systems, or post-silicon innovations, the field of computing is far from stagnant.
            </p>
            <p>
              As scientists and engineers continue to push the boundaries of what's possible, one thing is certain: computing will continue to evolve. The limits of today's technology may be tomorrow's starting point for an entirely new era of computation, and the pace of innovation will only accelerate as we venture deeper into the unknown.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ComputerLimits;
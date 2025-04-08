import React from 'react';
import GearSystem from './GearSystem';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="mysterious-bg">
        <GearSystem />
        <div className="floating-orb"></div>
        <div className="quote-banner">
          <p>"In the depths of reality, mysteries await those who dare to seek."</p>
        </div>
        <main className="content">
          <section className="phenomenon-card ancient">
            <h2>Ancient Mysteries</h2>
            <p>Unexplainable artifacts that defy historical understanding...</p>
            <div className="energy-field"></div>
          </section>
          <section className="phenomenon-card enigmatic">
            <h2>Quantum Anomalies</h2>
            <p>Phenomena that challenge our understanding of physics...</p>
            <div className="energy-field"></div>
          </section>
          <section className="phenomenon-card paranormal">
            <h2>Dimensional Rifts</h2>
            <p>Gateways between worlds that appear and vanish...</p>
            <div className="energy-field"></div>
          </section>
          <section className="phenomenon-card celestial">
            <h2>Cosmic Echoes</h2>
            <p>Strange signals from deep space that defy explanation...</p>
            <div className="energy-field"></div>
          </section>
          <section className="phenomenon-card legendary">
            <h2>Time Slips</h2>
            <p>Moments where past and present mysteriously intersect...</p>
            <div className="energy-field"></div>
          </section>
          <section className="phenomenon-card mythical">
            <h2>Forbidden Knowledge</h2>
            <p>Ancient wisdom that challenges modern understanding...</p>
            <div className="energy-field"></div>
          </section>
          <section className="phenomenon-card arcane">
            <h2>Energy Vortexes</h2>
            <p>Powerful locations where reality seems to bend...</p>
            <div className="energy-field"></div>
          </section>
          <section className="phenomenon-card mystifying">
            <h2>Conscious Evolution</h2>
            <p>Unexplained leaps in human consciousness and ability...</p>
            <div className="energy-field"></div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
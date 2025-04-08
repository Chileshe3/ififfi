import './App.css';

function App() { 
  return (
    <div className="App">
      <div className="mysterious-bg">
        <header className="phenomenon-header">
          <h1>Beyond Reality</h1>
          <div className="floating-orb"></div>
          <p className="main-quote">"Imagination can take you anywhere"</p>
          <div className="gear-system">
            <div className="gear driving"></div>
            <div className="gear driven"></div>
            <div className="gear driven-small"></div>
          </div>
        </header>
        
        <div className="quote-banner">
          <p>"To the stars and beyond"</p>
          <p>"No limits, no rules, just pure freedom to explore, heal, create and become all in a single thought"</p>
          <p>"In the depths of mystery lies the truth of existence"</p>
        </div>

        <main className="content">
          <section className="phenomenon-card magical">
            <h2>The Bermuda Triangle</h2>
            <p>Where ships and aircraft vanish without a trace...</p>
            <div className="energy-field"></div>
          </section>

          <section className="phenomenon-card cosmic">
            <h2>Aurora Borealis</h2>
            <p>Nature's light show dancing in the polar skies...</p>
            <div className="energy-field"></div>
          </section>

          <section className="phenomenon-card mystical">
            <h2>Ancient Portals</h2>
            <p>Doorways to other dimensions scattered across Earth...</p>
            <div className="energy-field"></div>
          </section>

          <section className="phenomenon-card ethereal">
            <h2>Time Anomalies</h2>
            <p>Mysterious temporal shifts defying our understanding...</p>
            <div className="energy-field"></div>
          </section>
        </main>

        <div className="quote-banner bottom">
          <p>"Where science ends, magic begins"</p>
          <p>"The universe whispers its secrets to those who dare to listen"</p>
        </div>
      </div>
    </div>
  );
}

export default App;

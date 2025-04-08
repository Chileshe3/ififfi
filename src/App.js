import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Phenomena from './components/Phenomena';
import Artifacts from './components/Artifacts';
import Mysteries from './components/Mysteries';
import Sitemap from './components/Sitemap';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'phenomena':
        return <Phenomena />;
      case 'artifacts':
        return <Artifacts />;
      case 'mysteries':
        return <Mysteries />;
      case 'sitemap':
        return <Sitemap />;
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="App-main">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;

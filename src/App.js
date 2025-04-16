import React, { useState, Suspense, lazy, useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Phenomena = lazy(() => import('./components/Phenomena'));
const Artifacts = lazy(() => import('./components/Artifacts'));
const Mysteries = lazy(() => import('./components/Mysteries'));
const Sitemap = lazy(() => import('./components/Sitemap'));
const Privacy = lazy(() => import('./components/Privacy'));
const Terms = lazy(() => import('./components/Terms'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    const components = {
      home: Home,
      about: About,
      phenomena: Phenomena,
      artifacts: Artifacts,
      mysteries: Mysteries,
      sitemap: Sitemap,
      privacy: Privacy,
      terms: Terms
    };

    const Component = components[currentPage] || Home;

    return (
      <div className={`page-container ${isPageTransitioning ? 'fade-out' : 'fade-in'}`}>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Component />
          </Suspense>
        </ErrorBoundary>
      </div>
    );
  };

  const handlePageChange = (newPage) => {
    setIsPageTransitioning(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsPageTransitioning(false);
    }, 300);
  };

  return (
    <div className="App">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Navigation currentPage={currentPage} setCurrentPage={handlePageChange} />
          <main className="App-main">
            {renderPage()}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

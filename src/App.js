import React, { useState, Suspense, lazy, useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Phenomena = lazy(() => import('./components/Phenomena'));
const Artifacts = lazy(() => import('./components/Artifacts'));
const Sitemap = lazy(() => import('./components/Sitemap'));
const Privacy = lazy(() => import('./components/Privacy'));
const Terms = lazy(() => import('./components/Terms'));
const Story = lazy(() => import('./components/stories/Story'));
const DimensionalRifts = lazy(() => import('./components/stories/DimensionalRifts'));
const AncientMysteries = lazy(() => import('./components/stories/AncientMysteries'));
// ...more story imports...

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Navigation />
          <main className="App-main">
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/story/:id" element={<Story />} />
                  <Route path="/story/dimensional-rifts" element={<DimensionalRifts />} />
                  <Route path="/story/ancient-mysteries" element={<AncientMysteries />} />
                  {/* Add routes for other stories */}
                  <Route path="/about" element={<About />} />
                  <Route path="/phenomena" element={<Phenomena />} />
                  <Route path="/artifacts" element={<Artifacts />} />
                  <Route path="/sitemap" element={<Sitemap />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

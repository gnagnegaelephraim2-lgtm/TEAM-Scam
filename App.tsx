
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Challenges from './pages/Challenges';
import Reviews from './pages/Reviews';
import PrivacyShield from './pages/PrivacyShield';
import DataProtocol from './pages/DataProtocol';
import TermsOfMission from './pages/TermsOfMission';
import Reflections from './pages/Reflections';
import DataHub from './pages/DataHub';

// Component to handle scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen transition-colors duration-300">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/data-hub" element={<DataHub />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reflections" element={<Reflections />} />
            <Route path="/privacy-shield" element={<PrivacyShield />} />
            <Route path="/data-protocol" element={<DataProtocol />} />
            <Route path="/terms-of-mission" element={<TermsOfMission />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Warranty from './pages/Warranty';
import Contact from './pages/Contact';
import About from './pages/About';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/warranty" element={<PageTransition><Warranty /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white flex flex-col font-sans">
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
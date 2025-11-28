import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Warranty from './pages/Warranty';
import ServiceArea from './pages/ServiceArea';
import Booking from './pages/Booking';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/warranty" element={<PageTransition><Warranty /></PageTransition>} />
        <Route path="/service-area" element={<PageTransition><ServiceArea /></PageTransition>} />
        <Route path="/booking" element={<PageTransition><Booking /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        {/* Redirect old contact route to booking for safety */}
        <Route path="/contact" element={<PageTransition><Booking /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-wizard-black text-white font-sans flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col">
          <AnimatedRoutes />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
};

export default App;
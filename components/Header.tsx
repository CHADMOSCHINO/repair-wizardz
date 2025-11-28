import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PHONE_NUMBER, PHONE_HREF } from '../types';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Warranty', path: '/warranty' },
    { label: 'Service Area', path: '/service-area' },
    { label: 'Booking', path: '/booking' },
    { label: 'About', path: '/about' },
  ];

  const closeMenu = () => setIsOpen(false);
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo (Left) */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
             <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-heading font-black text-xl">W</span>
            </div>
            <div className="flex flex-col">
              <span className="text-brand-navy font-heading font-extrabold text-xl leading-none">REPAIR</span>
              <span className="text-brand-orange font-heading font-bold text-lg leading-none">WIZARDZ</span>
            </div>
          </Link>

          {/* Desktop Nav (Right) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                  isActive(link.path) ? 'text-brand-orange' : 'text-brand-navy hover:text-orange-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href={PHONE_HREF} 
              className="bg-brand-orange hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm uppercase flex items-center gap-2 shadow-md transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-brand-navy p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block py-4 text-xl font-heading font-bold border-b border-gray-100 last:border-0 ${
                    isActive(link.path) ? 'text-brand-orange' : 'text-brand-navy'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4">
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 w-full bg-brand-navy text-white py-4 rounded-lg font-bold text-lg shadow-lg">
                  <Phone className="w-5 h-5" />
                  Call {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
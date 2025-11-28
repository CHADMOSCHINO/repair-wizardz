import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PHONE_NUMBER, PHONE_HREF, SMS_HREF } from '../types';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Warranty', path: '/warranty' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsOpen(false);
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-50" onClick={closeMenu}>
            <div className="w-10 h-10 bg-wizard-red rounded flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <span className="text-white font-black text-xl">R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-none tracking-tight">REPAIR</span>
              <span className="text-wizard-red font-bold text-lg leading-none tracking-tight">WIZARDZ</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2"
              >
                {isActive(link.path) && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-zinc-800 rounded-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 text-sm font-bold uppercase tracking-wide transition-colors ${
                  isActive(link.path) ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a href={PHONE_HREF} className="flex items-center gap-2 text-white hover:text-wizard-red transition-colors font-semibold">
              <Phone className="w-4 h-4" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <motion.a 
              href={SMS_HREF} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-wizard-red hover:bg-red-600 text-white px-5 py-2.5 rounded font-bold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors shadow-lg shadow-red-900/20"
            >
              <Camera className="w-4 h-4" />
              Text Photos
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-zinc-800 rounded transition-colors relative z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="md:hidden fixed inset-x-0 top-20 bg-black z-40 border-b border-zinc-800 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2 pb-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    className={`block p-4 text-lg font-bold uppercase tracking-wide rounded-lg ${
                      isActive(link.path) ? 'bg-zinc-900 text-wizard-red border-l-4 border-wizard-red' : 'text-gray-300 hover:bg-zinc-900 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="border-t border-zinc-800 my-4 pt-4 flex flex-col gap-4"
              >
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 text-white py-4 border border-zinc-700 rounded-lg bg-zinc-900 font-bold">
                  <Phone className="w-5 h-5" />
                  Call {PHONE_NUMBER}
                </a>
                <a href={SMS_HREF} className="flex items-center justify-center gap-2 text-white py-4 bg-wizard-red rounded-lg font-bold uppercase shadow-lg shadow-red-900/20">
                  <Camera className="w-5 h-5" />
                  Text Photos
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { Page } from '../types';
import { PlaneIcon, MenuIcon, XIcon } from '../constants';

interface HeaderProps {
  onNavClick: (page: Page) => void;
}

const navLinks: Page[] = ['Home', 'Travel Deals', 'Destinations', 'AI Tips', 'Blog', 'About Us', 'Contact'];

const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (page: Page) => {
    onNavClick(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => handleLinkClick('Home')}
          >
            <PlaneIcon className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-extrabold text-slate-800 tracking-tight">cheaptic.com</span>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <button
                key={link}
                onClick={() => handleLinkClick(link)}
                className="text-slate-600 font-medium hover:text-blue-600 transition-colors duration-300"
              >
                {link}
              </button>
            ))}
          </nav>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <button
                key={link}
                onClick={() => handleLinkClick(link)}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-100"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

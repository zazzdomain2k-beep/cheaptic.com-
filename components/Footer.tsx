
import React from 'react';
import { Page } from '../types';
import { PlaneIcon } from '../constants';

interface FooterProps {
  onNavClick: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const navLinks: Page[] = ['Home', 'Travel Deals', 'Destinations', 'Blog', 'About Us', 'Contact'];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4 cursor-pointer" onClick={() => onNavClick('Home')}>
              <PlaneIcon className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-extrabold text-white">cheaptic.com</span>
            </div>
            <p className="text-sm text-slate-400">Your adventure, your budget.</p>
          </div>
          <div className="md:col-span-3">
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                 <div>
                    <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Navigation</h4>
                    <ul className="space-y-2">
                        {navLinks.map(link => (
                            <li key={link}>
                                <button onClick={() => onNavClick(link)} className="hover:text-white transition-colors duration-300">{link}</button>
                            </li>
                        ))}
                    </ul>
                 </div>
                 <div>
                    <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Legal</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a></li>
                    </ul>
                 </div>
                 <div>
                    <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Connect</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition-colors duration-300">Facebook</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-300">Twitter</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-300">Instagram</a></li>
                    </ul>
                 </div>
             </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
          <p>&copy; {currentYear} Cheaptic.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

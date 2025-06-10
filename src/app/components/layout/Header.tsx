"use client"

import React from 'react';
import { Wifi, Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection
}) => {
  const navItems = ['Home', 'Features', 'Pricing', 'Contact'];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Wifi className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              NetBill Pro
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-all duration-300 hover:text-cyan-400 ${
                  activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-white/70'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-black/40 rounded-lg backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
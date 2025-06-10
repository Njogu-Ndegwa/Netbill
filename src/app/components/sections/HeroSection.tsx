"use client"

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { StatCard } from '../ui/StatCard';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
    { number: "KSh 2,500", label: "Starting Price" }
  ];

  return (
    <section id="home" className="pt-24 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 animate-pulse"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
              Revolutionary Internet Billing System
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              The most affordable, feature-rich billing solution for ISPs and hotspot providers in Kenya
            </p>
          </div>
          
          <div className="animate-fade-in-up animation-delay-300 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="border-2 border-white/30 hover:border-cyan-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto"
            >
              Learn More
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-600">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full animate-bounce animation-delay-1000"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-400/20 rounded-full animate-bounce animation-delay-2000"></div>
    </section>
  );
};
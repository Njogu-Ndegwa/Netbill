"use client"

import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>
      <p className="text-white/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
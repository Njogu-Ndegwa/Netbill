"use client"

import React from 'react';
import { CheckCircle, Star } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  period,
  description,
  features,
  popular
}) => {
  return (
    <div
      className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:transform hover:scale-105 ${
        popular
          ? 'bg-gradient-to-b from-cyan-500/20 to-purple-600/20 border-cyan-400/50 shadow-xl shadow-cyan-500/25'
          : 'bg-white/5 border-white/10 hover:border-purple-400/50'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
            <Star className="w-4 h-4" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-cyan-400">{price}</span>
          <span className="text-white/60">{period}</span>
        </div>
        <p className="text-white/70">{description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span className="text-white/80">{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
        popular
          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
          : 'border-2 border-white/30 hover:border-cyan-400 hover:bg-white/10'
      }`}>
        Get Started
      </button>
    </div>
  );
};
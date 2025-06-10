
"use client"

import React, { useState } from 'react';
import { PricingCard } from '../ui/PricingCard';
import { Users } from 'lucide-react';

interface PricingSectionProps {
  scrollToSection: (sectionId: string) => void;
}
export const PricingSection: React.FC<PricingSectionProps> = ({scrollToSection}) => {
  const [userCount, setUserCount] = useState(50);

  // Define pricing tiers for each plan
  const pricingTiers = [
    { min: 50, max: 100, hotspot: 1500, pppoe: 2500, combined: 3000 },
    { min: 100, max: 200, hotspot: 2500, pppoe: 4000, combined: 5000 },
    { min: 200, max: 300, hotspot: 3500, pppoe: 5500, combined: 7000 },
    { min: 300, max: 400, hotspot: 4500, pppoe: 7000, combined: 8500 },
    { min: 400, max: 500, hotspot: 5500, pppoe: 8500, combined: 10000 },
    { min: 500, max: 600, hotspot: 6500, pppoe: 10000, combined: 12000 },
    { min: 600, max: 700, hotspot: 7500, pppoe: 12000, combined: 14000 },
    { min: 700, max: 800, hotspot: 8500, pppoe: 14000, combined: 16000 },
    { min: 800, max: 900, hotspot: 9000, pppoe: 16000, combined: 18000 },
    { min: 900, max: 1000, hotspot: 9500, pppoe: 17000, combined: 19000 },
    { min: 1000, max: Infinity, hotspot: 10000, pppoe: 18000, combined: 20000 }
  ];

  // Get current pricing based on user count
  const getCurrentPricing = () => {
    const tier = pricingTiers.find(
      tier => userCount >= tier.min && userCount <= tier.max
    ) || pricingTiers[pricingTiers.length - 1];
    return tier;
  };

  const currentPricing = getCurrentPricing();

  // Calculate slider position (0-100)
  const getSliderPosition = () => {
    if (userCount <= 50) return 0;
    if (userCount >= 1000) return 100;
    return ((userCount - 50) / 950) * 100;
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setUserCount(value);
  };

  const pricingPlans = [
    {
      name: "Hotspot Plan",
      price: `KSh ${currentPricing.hotspot.toLocaleString()}`,
      period: "/month",
      description: "Perfect for cafes, hotels, and small hotspot providers",
      features: [
        "Guest Access Controls",
        "Basic Usage Analytics",
        "Per-User Bandwidth Management",
        "Mpesa Integration & SMS Alerts"
      ],
      popular: false
    },
    {
      name: "PPPoE & Static Plan",
      price: `KSh ${currentPricing.pppoe.toLocaleString()}`,
      period: "/month",
      description: "Ideal for ISPs providing dedicated internet services",
      features: [
        "PPPoE Authentication & Management",
        "Static IP Assignment",
        "Advanced VLAN & Network Segmentation",
        "Proactive Network Monitoring"
      ],
      popular: true
    },
    {
      name: "PPPoE & Static + Hotspot Plan",
      price: `KSh ${currentPricing.combined.toLocaleString()}`,
      period: "/month",
      description: "Complete solution for large-scale ISPs and enterprises",
      features: [
        "All Hotspot Plan Features",
        "All PPPoE & Static Plan Features",
        "Priority 24/7 Phone & Chat Support",
        "Advanced Reporting & API Access"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
            Wherever your status, our offers evolve according to your needs
          </p>

          {/* User Slider Component */}
          <div className="max-w-2xl mx-auto mb-16 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <label className="text-lg font-semibold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-400" />
                Number Of Clients:
              </label>
              <span className="text-2xl font-bold text-cyan-400">
                {userCount === 1000 ? '1000+' : userCount}
              </span>
            </div>
            
            <div className="relative mb-6">
              <input
                type="range"
                min="50"
                max="1000"
                step="10"
                value={userCount}
                onChange={handleSliderChange}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, 
                    rgb(6 182 212) 0%, 
                    rgb(6 182 212) ${getSliderPosition()}%, 
                    rgba(255, 255, 255, 0.2) ${getSliderPosition()}%, 
                    rgba(255, 255, 255, 0.2) 100%)`
                }}
              />
              <div className="absolute -bottom-6 flex justify-between w-full text-xs text-white/50">
                <span>50</span>
                <span>1000+</span>
              </div>
            </div>

            <style jsx>{`
              .slider::-webkit-slider-thumb {
                appearance: none;
                width: 24px;
                height: 24px;
                background: white;
                border-radius: 50%;
                cursor: pointer;
                box-shadow: 0 0 0 4px rgba(6, 182, 212, 0.2), 0 0 20px rgba(6, 182, 212, 0.5);
                transition: all 0.2s ease;
              }

              .slider::-webkit-slider-thumb:hover {
                transform: scale(1.1);
                box-shadow: 0 0 0 6px rgba(6, 182, 212, 0.3), 0 0 30px rgba(6, 182, 212, 0.6);
              }

              .slider::-moz-range-thumb {
                width: 24px;
                height: 24px;
                background: white;
                border-radius: 50%;
                cursor: pointer;
                border: none;
                box-shadow: 0 0 0 4px rgba(6, 182, 212, 0.2), 0 0 20px rgba(6, 182, 212, 0.5);
                transition: all 0.2s ease;
              }

              .slider::-moz-range-thumb:hover {
                transform: scale(1.1);
                box-shadow: 0 0 0 6px rgba(6, 182, 212, 0.3), 0 0 30px rgba(6, 182, 212, 0.6);
              }
            `}</style>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} scrollToSection={scrollToSection} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};
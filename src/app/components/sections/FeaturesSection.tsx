"use client"

import React from 'react';
import { DollarSign, Wifi, Users, Smartphone, BarChart3, Ticket } from 'lucide-react';
import { FeatureCard } from '../ui/FeatureCard';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Most Affordable Solution",
      description: "Get the best value for money with our competitively priced billing system that doesn't compromise on quality.",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Simple & Intuitive",
      description: "User-friendly interface designed for easy navigation. No technical expertise required to get started.",
      color: "from-blue-400 to-cyan-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Real-time Traffic Monitoring",
      description: "Monitor internet usage, track active users, and manage bandwidth allocation with comprehensive analytics.",
      color: "from-purple-400 to-violet-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "M-Pesa Integration",
      description: "Seamless mobile money integration for easy payments. Your customers can pay instantly via M-Pesa.",
      color: "from-orange-400 to-red-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Sales Tracking",
      description: "Advanced analytics and reporting tools to track your revenue, customer growth, and business performance.",
      color: "from-teal-400 to-cyan-600"
    },
    {
      icon: <Ticket className="w-8 h-8" />,
      title: "Ticket Management",
      description: "Efficient customer support system with ticket creation, tracking, and resolution capabilities.",
      color: "from-pink-400 to-rose-600"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Everything you need to manage your internet billing business efficiently and profitably
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
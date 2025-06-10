"use client"

import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-cyan-400">{number}</div>
      <div className="text-white/60">{label}</div>
    </div>
  );
};
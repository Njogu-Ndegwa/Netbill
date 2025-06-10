"use client";

import React, { useState } from 'react';

const plans = [
  { title: 'Hotspot Plan', price: 1500, features: ['Automatic Connection via mac.', 'Mpesa till & paybill integrated.', 'SMS alert on connection and on disconnection'] },
  { title: 'PPPOE & STATIC Plan', price: 2500, features: ['Automated reconnection', 'Mpesa integrated', 'SMS alert on due, recharge & 2 days before'] },
  { title: 'PPPOE & STATIC & HOTSPOT Plan', price: 3000, features: ['All fully automated', 'Mpesa integrated', 'SMS alert integrated'] }
];

export default function Pricing() {
  const [clients, setClients] = useState(5);
  return (
    <section id="pricing" className="container mx-auto px-4 py-20">
      <h2 className="text-center text-4xl font-bold text-indigo-800 mb-8">Simple, Transparent Pricing</h2>
      <p className="text-center text-gray-600 mb-12">Whatever your status, our offers evolve according to your needs.</p>
      <div className="text-center mb-8">
        <label className="block text-gray-700 mb-2">Number of Clients: {clients}</label>
        <input
          type="range"
          min="1"
          max="100"
          value={clients}
          onChange={(e) => setClients(Number(e.target.value))}
          className="w-1/2"
        />
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, idx) => (
          <div key={idx} className="border rounded-lg p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
            <p className="text-3xl font-bold text-indigo-800 mb-4">Ksh {plan.price}/month</p>
            <ul className="text-gray-600 mb-6 space-y-2">
              {plan.features.map((f,i) => <li key={i}>✔ {f}</li>)}
            </ul>
            <button className="border border-indigo-800 text-indigo-800 px-4 py-2 rounded-full hover:bg-indigo-800 hover:text-white transition">Select Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
}
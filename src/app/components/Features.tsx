import React from 'react';
// import SalesImg from '../assets/feature-sales.svg';
// import TrafficImg from '../assets/feature-traffic.svg';
// import HotspotImg from '../assets/feature-hotspot.svg';

const features = [
  { title: 'Sales Tracking', img: "", text: 'Now manage your business on the go...' },
  { title: 'Monitor All Your Traffic', img: "", text: 'Monitor your traffic through the system...' },
  { title: 'Manage Hotspot Users', img: "", text: 'Hotspot users are automatic...' }
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm uppercase text-gray-500">See our</h2>
        <h1 className="text-center text-4xl font-bold text-indigo-800 mb-12">Awesome features</h1>
        <div className="grid gap-12 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center">
              <img src={f.img} alt={f.title} className="mb-6" />
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">{f.title}</h3>
              <p className="text-gray-600 max-w-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
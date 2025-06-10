import React from 'react';
// import HeroIllustration from '../assets/hero.svg';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 flex flex-col-reverse lg:flex-row items-center">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-5xl font-bold text-indigo-800">Manage Your <span className="text-green-500">Network</span></h1>
        <p className="mt-4 text-gray-700">
          Wispman is an ISP management system which helps you to manage your ISP business smoothly. Wispman is developed for PPPOE and Hotspot business owners. Not only PPPOE/Hotspot business owners but useful in other related businesses as well.
        </p>
      </div>
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        {/* <img src={HeroIllustration} alt="Hero illustration" /> */}
      </div>
    </section>
  );
}
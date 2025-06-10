"use client"

import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const handleSubmit = () => {
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Ready to transform your internet billing business? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Phone className="w-8 h-8 text-cyan-400" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-white/70">+254 700 123 456</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Mail className="w-8 h-8 text-cyan-400" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-white/70">hello@netbillpro.co.ke</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <MapPin className="w-8 h-8 text-cyan-400" />
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-white/70">Westlands, Nairobi, Kenya</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-white/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-white/50"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-white/50"
            />
            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-white/50 resize-none"
            ></textarea>
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
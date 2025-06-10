"use client"

import React from 'react';
import { Wifi } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                NetBill Pro
              </span>
            </div>
            <p className="text-white/60 text-sm">
              The most affordable and feature-rich internet billing system for Kenyan ISPs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>&copy; 2025 NetBill Pro. All rights reserved. Made with ❤️ in Kenya.</p>
        </div>
      </div>
    </footer>
  );
};
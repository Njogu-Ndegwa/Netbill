// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-indigo-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="space-x-4 mb-4 md:mb-0">
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="Pinterest">📌</a>
          <a href="#" aria-label="Twitter">🐦</a>
        </div>
        <p className="text-sm">© 2025 Wispman. All rights reserved.</p>
      </div>
    </footer>
  );
}
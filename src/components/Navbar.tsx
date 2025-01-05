import React from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">OmniCore AI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-gray-700 hover:text-indigo-600 transition-colors">Solutions</a>
            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
            <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Contact Us
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#solutions" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Solutions</a>
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Features</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
            <a href="#contact" className="block px-3 py-2 text-indigo-600 font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}
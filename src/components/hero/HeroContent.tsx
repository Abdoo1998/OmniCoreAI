import React from 'react';
import { ArrowRight, Brain } from 'lucide-react';

export default function HeroContent() {
  return (
    <div className="relative z-10 pt-20 pb-16 sm:pb-24">
      <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 animate-ping-slow">
                <Brain className="h-20 w-20 text-indigo-500/30" />
              </div>
              <Brain className="h-20 w-20 text-indigo-600 relative" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x pb-2">
            OmniCore AI
            <span className="block mt-2 text-4xl md:text-5xl">Transforming Tomorrow</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-600 animate-fade-in-up animation-delay-300">
            Pioneering the future with cutting-edge artificial intelligence solutions. 
            From natural language processing to computer vision, we deliver innovation at scale.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up animation-delay-450">
            <a href="#contact" 
              className="group relative px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105">
              <span className="relative z-10 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a href="#solutions" 
              className="px-8 py-4 text-lg font-medium text-indigo-600 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 border border-indigo-100">
              Explore Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
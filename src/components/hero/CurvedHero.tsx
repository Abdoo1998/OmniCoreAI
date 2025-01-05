import React from 'react';
import { ArrowRight, Brain } from 'lucide-react';

export default function CurvedHero() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover"
          alt="Modern city background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-purple-900/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 pt-32 pb-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in-up">
            Welcome to OmniCore AI
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-150">
            Pioneering the future of artificial intelligence with cutting-edge solutions that transform businesses and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up animation-delay-300">
            <a href="#contact" 
              className="group px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              Get Started
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#solutions" 
              className="px-8 py-4 text-lg font-medium text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300">
              Explore Solutions
            </a>
          </div>
        </div>
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="fill-white" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64V120H0V64Z" />
        </svg>
      </div>
    </div>
  );
}
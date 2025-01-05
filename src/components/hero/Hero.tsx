import React from 'react';
import GradientBackground from './GradientBackground';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GradientBackground />
      <HeroContent />
    </div>
  );
}
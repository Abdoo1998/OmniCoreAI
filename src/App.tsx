import React from 'react';
import CurvedHero from './components/hero/CurvedHero';
import FeaturesGrid from './components/features/FeaturesGrid';
import Solutions from './components/solutions/Solutions';
import ComputerVisionSection from './components/solutions/ComputerVisionSection';
import NLPSolutions from './components/solutions/nlp/NLPSolutions';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <CurvedHero />
      <FeaturesGrid />
      <Solutions />
      <ComputerVisionSection />
      <NLPSolutions />
      <Contact />
    </div>
  );
}

export default App;
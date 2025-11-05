import React from 'react';
import Hero from './components/Hero';
import TokenGrid from './components/TokenGrid';
import GovernanceSection from './components/GovernanceSection';
import RoadmapSection from './components/RoadmapSection';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <TokenGrid />
      <GovernanceSection />
      <RoadmapSection />
      <footer className="border-t border-white/10 bg-black/60 py-10 text-center text-xs text-white/60">
        © {new Date().getFullYear()} eRandomies — A decentralized nation built for creativity, democracy, and innovation.
      </footer>
    </div>
  );
}

export default App;

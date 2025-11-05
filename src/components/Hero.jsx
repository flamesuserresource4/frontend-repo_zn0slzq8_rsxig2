import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Crown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient and vignette overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 180px rgba(0,0,0,0.65)' }} />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-widest text-white/80 backdrop-blur">
          <Crown className="h-4 w-4 text-amber-400" />
          The Dawn of a Decentralized Nation
        </span>
        <h1 className="text-balance bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          eRandomies
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-sm text-white/80 sm:text-base">
          Launching February 2025 — a pioneering ecosystem of meme coins, NFTs, and on-chain governance. Where creativity, democracy, and innovation converge.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#tokens"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            <Rocket className="h-4 w-4" /> Explore Tokens
          </a>
          <a
            href="#governance"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Learn Governance
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

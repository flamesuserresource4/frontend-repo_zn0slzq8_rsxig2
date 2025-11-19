import React from 'react';
import { Globe, Users, Crown, Shield, Rocket, Calendar, Coins, Star } from 'lucide-react';

export default function Manifesto() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-black to-[#07070a] py-24">
      {/* Decorative gradient ring */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-600/20 via-violet-600/10 to-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <Rocket className="h-3.5 w-3.5 text-fuchsia-400" />
          <span>eRandomies: The Dawn of a Decentralized Nation</span>
        </div>

        <h2 className="text-balance bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-3xl font-semibold leading-tight text-transparent md:text-4xl">
          A visionary nation for creativity, democracy, and innovation
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70">
          As we stand on the brink of a transformative era in cryptocurrency, eRandomies is set to revolutionize the landscape by introducing a pioneering decentralized nation commencing in 2025. Our vision goes beyond participation—we aspire to redefine what it means to exist within the crypto universe with innovative concepts and exhilarating challenges that reshape the meme coin market.
        </p>

        {/* TL;DR card */}
        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <div className="flex items-start gap-3">
            <Shield className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
            <div>
              <p className="text-sm font-medium text-white">TL;DR</p>
              <p className="mt-1 text-sm leading-relaxed text-white/70">
                11 character-driven meme coins across Bronze, Silver, and Gold tiers + a premium main coin, sequentially launching on Solana. XREDDY—the enigmatic feline—fully reveals at $50M market cap and after all characters launch, with a 10,000 NFT collection fueling community ownership. True governance lives in eParliament, a decentralized, proportionally representative system where every country has elected delegates and a fair vote cap.
              </p>
            </div>
          </div>
        </div>

        {/* Token Ecosystem */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <div className="flex items-center gap-2 text-white">
              <Coins className="h-5 w-5 text-amber-400" />
              <h3 className="text-lg font-semibold">Token Ecosystem</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              At the heart of eRandomies lies an ambitious collection of eleven meme coins, each personifying a unique character and categorized into three tiers: Bronze, Silver, and Gold. Alongside these, a premium main coin debuts as part of our inaugural token series—cultivating diverse engagement and investment opportunities.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] text-white/70">
              <span className="rounded-md bg-white/5 px-3 py-1">Bronze</span>
              <span className="rounded-md bg-white/5 px-3 py-1">Silver</span>
              <span className="rounded-md bg-white/5 px-3 py-1">Gold</span>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <div className="flex items-center gap-2 text-white">
              <Star className="h-5 w-5 text-fuchsia-400" />
              <h3 className="text-lg font-semibold">XREDDY + NFTs</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Introducing XREDDY, an enigmatic feline character whose full persona will be revealed once a $50M market cap is surpassed. A limited collection of 10,000 unique NFTs accompanies this launch, elevating community ownership and creativity. The ultimate unveiling of XREDDY follows the simultaneous character launches and achieving a $10M market cap for XREDDY.
            </p>
          </div>
        </div>

        {/* Governance */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <div className="flex items-center gap-2 text-white">
              <Crown className="h-5 w-5 text-yellow-400" />
              <h3 className="text-lg font-semibold">eParliament Governance</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              eParliament is the world’s first decentralized parliament, representing every participating country through elected delegates. A dedicated dApp powers decision-making on even the most intricate matters—delivering real, inclusive democracy.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2"><Users className="mt-0.5 h-4 w-4 text-cyan-400" /> Every voice counts with proportional voting and fair country-based limits.</li>
              <li className="flex items-start gap-2"><Globe className="mt-0.5 h-4 w-4 text-green-400" /> Delegates are elected by citizens and represent their nation on-chain.</li>
              <li className="flex items-start gap-2"><Shield className="mt-0.5 h-4 w-4 text-purple-400" /> Decisions executed transparently via the governance dApp.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <div className="flex items-center gap-2 text-white">
              <Users className="h-5 w-5 text-sky-400" />
              <h3 className="text-lg font-semibold">Culture & Community</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              To amplify engagement, each nation appoints a content creator via a playful, poll-driven process. Top-voted suggestions come to life as creative challenges—ten countries collaborate weekly, with forty nations participating monthly to ensure inclusivity and vibrant cultural exchange.
            </p>
          </div>
        </div>

        {/* Territories & Identity */}
        <div className="mt-8 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
          <div className="flex items-center gap-2 text-white">
            <Globe className="h-5 w-5 text-emerald-400" />
            <h3 className="text-lg font-semibold">Territories & Identity</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Beyond governance, eRandomies will establish its own territories worldwide, offering exclusive benefits to citizens. Every participant receives a unique identity within this revolutionary ecosystem—symbolizing their membership and stake in the decentralized nation.
          </p>
        </div>

        {/* Timeline & Chain */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="h-5 w-5 text-cyan-400" />
              <h3 className="text-lg font-semibold">Timeline</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              eRandomies is poised to begin in February 2025 with phased launches, roadmap-aligned milestones, and progressive community activation.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <div className="flex items-center gap-2 text-white">
              <Rocket className="h-5 w-5 text-fuchsia-400" />
              <h3 className="text-lg font-semibold">Built on Solana</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Each token will be launched sequentially on the Solana blockchain for speed, efficiency, and scalability—empowering frictionless participation across the ecosystem.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <p className="max-w-3xl text-sm leading-relaxed text-white/70">
            Together, we are forging a future where creativity, democracy, and innovation converge. Welcome to a nation that truly belongs to you.
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:from-fuchsia-400 hover:to-cyan-400">
              Join the Movement
            </a>
            <a href="#roadmap" className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 transition hover:border-white/25 hover:bg-white/10">
              View Roadmap
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

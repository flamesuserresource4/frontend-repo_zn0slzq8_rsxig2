import React from 'react';
import { Coins, Crown, Medal, Star } from 'lucide-react';

const TierCard = ({ title, badge, description, accent }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2)]">
    <div className={`mb-3 inline-flex items-center gap-2 rounded-full ${accent} px-3 py-1 text-xs font-semibold text-white`}>
      {badge}
      {title}
    </div>
    <p className="text-sm text-white/80">{description}</p>
    <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/10 blur-2xl transition group-hover:bg-white/20" />
  </div>
);

const TokenGrid = () => {
  return (
    <section id="tokens" className="relative w-full bg-gradient-to-b from-black via-zinc-950 to-black py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">eRandomies Token Collection</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Eleven meme coins across three tiers, plus a premium main coin. All launching sequentially on Solana for speed, efficiency, and scale.
            </p>
          </div>
          <div className="hidden shrink-0 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur sm:inline-flex">
            <Coins className="mr-2 h-4 w-4 text-emerald-400" /> Solana Ecosystem
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <TierCard
            title="Bronze Tier"
            badge={<Medal className="h-4 w-4 text-amber-400" />}
            accent="bg-amber-500/20"
            description="Foundational characters with accessible entry. Community-driven fun and early engagements."
          />
          <TierCard
            title="Silver Tier"
            badge={<Star className="h-4 w-4 text-sky-300" />}
            accent="bg-sky-500/20"
            description="Elevated utilities and visibility. Designed for scaling narratives and collaboration."
          />
          <TierCard
            title="Gold Tier"
            badge={<Crown className="h-4 w-4 text-yellow-300" />}
            accent="bg-yellow-500/20"
            description="Flagship characters with premium scarcity and spotlight across ecosystem experiences."
          />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-600/30 via-violet-600/20 to-sky-500/20 p-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
              <Crown className="h-4 w-4 text-pink-300" /> XREDDY — The Enigmatic Feline
            </div>
            <p className="text-sm text-white/80">
              The original premium coin. Full persona reveal after a $10M market cap and ultimate reveal beyond $50M. Accompanied by 10,000 unique NFTs.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] text-white/80">
              <Coins className="h-3 w-3 text-emerald-300" /> Launching on Solana
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenGrid;

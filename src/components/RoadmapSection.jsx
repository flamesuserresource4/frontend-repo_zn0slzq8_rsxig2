import React from 'react';
import { Calendar, Rocket, Crown, Coins } from 'lucide-react';

const Step = ({ eyebrow, title, desc, icon }) => (
  <div className="relative flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
    <div className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
      {icon}
    </div>
    <div>
      <div className="text-[11px] uppercase tracking-wider text-white/50">{eyebrow}</div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
    </div>
  </div>
);

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="relative w-full bg-gradient-to-b from-black to-zinc-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Roadmap to 2025 and Beyond</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Clear milestones from launch to large-scale governance, community creation cycles, and global territory benefits.
            </p>
          </div>
          <div className="hidden shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur sm:inline-flex">
            <Calendar className="h-4 w-4" /> Timeline
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Step
            eyebrow="Feb 2025"
            title="Public Launch"
            desc="Website, community onboarding, and the first wave of announcements for the 11-character collection plus the premium coin."
            icon={<Rocket className="h-5 w-5 text-emerald-300" />}
          />
          <Step
            eyebrow="Sequential Rollouts"
            title="Token Launches on Solana"
            desc="All characters and the main coin deploy in sequence for sustainable growth and liquidity formation."
            icon={<Coins className="h-5 w-5 text-sky-300" />}
          />
          <Step
            eyebrow="NFT Collection"
            title="10,000 Unique NFTs"
            desc="A limited collection aligned with XREDDY and ecosystem identity, unlocking community perks and creative challenges."
            icon={<Crown className="h-5 w-5 text-pink-300" />}
          />
          <Step
            eyebrow="$10M → $50M Milestones"
            title="XREDDY Reveal Phases"
            desc="Initial reveal at $10M market cap for XREDDY, with the full persona unveiled beyond $50M market cap."
            icon={<Crown className="h-5 w-5 text-yellow-300" />}
          />
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

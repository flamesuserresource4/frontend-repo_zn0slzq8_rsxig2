import React from 'react';
import { Globe, Users, Shield } from 'lucide-react';

const Bullet = ({ title, desc, icon }) => (
  <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
    <div className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
    </div>
  </div>
);

const GovernanceSection = () => {
  return (
    <section id="governance" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold sm:text-4xl">eParliament — Decentralized Governance</h2>
          <p className="mt-2 max-w-3xl text-sm text-white/70">
            A global parliament where each participating nation elects delegates. Citizens vote through a dedicated dApp, ensuring fair, transparent, and inclusive decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Bullet
            title="Fair, Proportional Voting"
            desc="Voting limits are balanced to respect population sizes, ensuring equitable representation across nations."
            icon={<Globe className="h-5 w-5 text-emerald-300" />}
          />
          <Bullet
            title="Elected Delegates"
            desc="Each country is represented by its chosen delegates, accountable to citizens through regular on-chain polls."
            icon={<Users className="h-5 w-5 text-sky-300" />}
          />
          <Bullet
            title="Community Content Cycles"
            desc="Every week ten countries collaborate with their appointed creators. Forty nations rotate monthly to spotlight diverse voices."
            icon={<Shield className="h-5 w-5 text-violet-300" />}
          />
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6">
          <p className="text-sm text-white/70">
            Beyond governance, citizens receive unique identities and access to exclusive global territories and benefits as the decentralized nation expands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;

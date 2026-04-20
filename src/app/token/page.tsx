"use client";

import { motion } from "framer-motion";
import { 
  Coins, 
  ArrowUpRight, 
  ShieldCheck, 
  Zap, 
  Lock, 
  Layers,
  PieChart,
  Repeat,
  Flame,
  Briefcase
} from "lucide-react";
import TokenomicsChart from "@/components/TokenomicsChart";

export default function TokenPage() {
  const utilities = [
    { 
      title: "Payment Medium", 
      desc: "All task rewards are distributed in $EFX. Users earn tokens by completing verified tasks, and businesses purchase $EFX to fund campaigns.",
      icon: Coins 
    },
    { 
      title: "Staking Asset", 
      desc: "Stake $EFX to unlock reward multipliers, passive APY, premium task access, and discounted platform fees.",
      icon: Lock 
    },
    { 
      title: "Governance Rights", 
      desc: "Token holders participate in decentralized governance by voting on protocol upgrades, parameters, and treasury allocations.",
      icon: Briefcase 
    },
    { 
      title: "Fee Discounts", 
      desc: "Paying platform fees in $EFX provides significant discounts compared to external payment methods.",
      icon: Zap 
    },
    { 
      title: "Reward Boosting", 
      desc: "Burn $EFX to temporarily boost reward multipliers on individual tasks, creating deflationary pressure.",
      icon: Flame 
    },
  ];

  const mechanisms = [
    { title: "Buyback & Burn", desc: "A portion of platform revenue is used to buy back $EFX and burn it permanently." },
    { title: "Staking Lock-ups", desc: "Tokens staked for multipliers are removed from circulating supply, reducing sell pressure." },
    { title: "Ecosystem Flywheel", desc: "Growth in platform users drives organic demand for $EFX to fund task creation." },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col gap-24">
        {/* Hero */}
        <section className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h1 className="text-5xl lg:text-7xl font-black mb-8">
              The <span className="neon-text">$EFX</span> <br /> Ecosystem Token
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed mb-10">
              The native utility and governance asset of the EarnifyX protocol. $EFX powers the world's most transparent task marketplace and aligns incentives across all participants.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary px-10 py-4 flex items-center gap-2">
                Buy $EFX
                <ArrowUpRight size={20} />
              </button>
              <button className="btn-secondary px-10 py-4">View Contract</button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center p-8 shadow-2xl shadow-primary/30 relative z-10 animate-pulse-slow">
              <ShieldCheck className="text-white w-full h-full" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/10 blur-[100px] rounded-full -z-10" />
          </div>
        </section>

        {/* Token Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Token Name", value: "EarnifyX Token" },
            { label: "Symbol", value: "$EFX" },
            { label: "Total Supply", value: "100,000,000" },
            { label: "Blockchain", value: "EVM Compatible" },
          ].map((item, i) => (
            <div key={i} className="glass-card p-6 border border-white/5">
              <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-2xl font-black">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Tokenomics */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tokenomics & Distribution</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">Strategic allocation designed for long-term sustainability and ecosystem growth.</p>
          </div>
          <div className="glass-card p-12 border border-white/5">
            <TokenomicsChart />
          </div>
        </section>

        {/* Utilities */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Token Utility</h2>
            <p className="text-foreground/60">Five critical functions that drive $EFX ecosystem value.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {utilities.map((util, i) => (
              <div key={i} className="glass-card p-8 border border-white/5 flex flex-col gap-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <util.icon className="text-primary w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold">{util.title}</h4>
                <p className="text-foreground/60 leading-relaxed">{util.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mechanisms */}
        <section className="bg-white/[0.02] -mx-6 px-6 py-24 border-y border-white/5">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">Deflationary <span className="text-primary">Mechanisms</span></h2>
                <div className="space-y-8">
                  {mechanisms.map((m, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center font-bold text-primary border border-white/10">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{m.title}</h4>
                        <p className="text-foreground/60">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card p-12 border border-white/10 flex flex-col items-center gap-8 text-center">
                 <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Flame className="text-primary w-12 h-12 animate-pulse" />
                 </div>
                 <h3 className="text-3xl font-bold">Sustainability First</h3>
                 <p className="text-foreground/60">
                   Unlike inflationary earning protocols, EarnifyX focuses on real platform revenue and deflationary burn cycles to ensure long-term holder value.
                 </p>
                 <button className="btn-primary w-full py-4">Explore Staking Yields</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

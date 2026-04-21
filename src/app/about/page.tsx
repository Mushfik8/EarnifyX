"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Zap,
  Globe,
  Users,
  Cpu,
  Lock,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Heart,
} from "lucide-react";

const values = [
  { icon: Shield, title: "Transparency", desc: "Every payment and task record is immutably stored on-chain. No hidden fees, no black-box payouts." },
  { icon: Cpu, title: "AI-First", desc: "Our proprietary AI engine automates verification at scale, making fraud economically impossible." },
  { icon: Globe, title: "Borderless", desc: "A wallet is all you need. Earn anywhere in the world with instant, borderless crypto settlement." },
  { icon: Lock, title: "Security", desc: "All contracts are audited by tier-1 security firms. Assets are protected by multi-sig governance." },
  { icon: Users, title: "Community-Owned", desc: "The protocol progressively transitions to DAO governance — holders vote on every major decision." },
  { icon: Heart, title: "Fair Rewards", desc: "AI pricing ensures tasks always pay fair market rates. No more race-to-the-bottom freelancing." },
];

const team = [
  { name: "Alex Morgan", role: "Founder & CEO", avatar: "AM", bg: "from-blue-500 to-violet-500" },
  { name: "Priya Sharma", role: "CTO / AI Lead", avatar: "PS", bg: "from-violet-500 to-pink-500" },
  { name: "Jin Wei", role: "Head of Protocol", avatar: "JW", bg: "from-cyan-500 to-blue-500" },
  { name: "Sara Okonkwo", role: "Head of Growth", avatar: "SO", bg: "from-green-500 to-teal-500" },
];

const milestones = [
  { year: "Q1 2025", title: "Inception", desc: "Concept finalized, founding team assembled, seed funding secured." },
  { year: "Q2 2025", title: "MVP Launch", desc: "Beta platform live with 500 testers, initial business partnerships established." },
  { year: "Q3 2025", title: "Token Launch", desc: "$EFX TGE, mainnet deployment, staking system activated." },
  { year: "Q4 2025", title: "AI V2 & Scale", desc: "Advanced fraud models deployed, reputation NFT system launched." },
  { year: "2026", title: "Global Expansion", desc: "Mobile apps, multi-chain, 1M+ users target." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-0 pb-24">
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/8 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-white/50 mb-6"
          >
            <Zap size={12} className="text-primary" />
            About EarnifyX
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]"
          >
            Building the Future of <br className="hidden sm:block" />
            <span className="neon-text">Decentralized Work</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            EarnifyX was born from a simple belief: your time and skills deserve transparent, instant, and fair compensation — without middlemen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/docs" className="btn-primary px-8 py-3 flex items-center gap-2 justify-center">
              Read the Docs
              <ArrowRight size={16} />
            </Link>
            <a href="/Earnifyx_Whitepaper_v1.0.pdf" download className="btn-secondary px-8 py-3 flex items-center justify-center">
              Whitepaper
            </a>
            <a href="/Pitch_Deck.pdf" download className="btn-secondary px-8 py-3 flex items-center justify-center">
              Pitch Deck
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="px-6 py-12 border-y border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {[
            { label: "Total Users", value: "125K+" },
            { label: "$EFX Distributed", value: "18M+" },
            { label: "Tasks Completed", value: "1.5M+" },
            { label: "Countries", value: "142" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-black neon-text mb-1">{s.value}</p>
              <p className="text-xs text-white/35 font-semibold uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-6 tracking-tight">
              Our Mission
            </h2>
            <p className="text-white/55 leading-relaxed mb-6">
              We're building the infrastructure for a new class of decentralized labor — one where AI guarantees fairness, blockchain guarantees payment, and smart contracts eliminate the need for trust in third parties.
            </p>
            <p className="text-white/55 leading-relaxed mb-8">
              EarnifyX doesn't just tokenize work. It reimagines the entire employment contract — making it global, instant, and verifiable by default.
            </p>
            <div className="space-y-3">
              {["No geographic restrictions on earning", "AI-verified tasks eliminate disputes", "Real-time on-chain settlement"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/65">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-8 border border-white/[0.07]">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-primary" size={24} />
                <span className="font-bold text-white/80">Protocol Growth</span>
              </div>
              <div className="space-y-5">
                {[
                  { label: "Task Completion Rate", val: 94, color: "#3B82F6" },
                  { label: "Fraud Prevention Rate", val: 99.7, color: "#8B5CF6" },
                  { label: "User Retention (30d)", val: 78, color: "#06D6A0" },
                ].map((m, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-white/50 font-medium">{m.label}</span>
                      <span className="text-xs font-bold" style={{ color: m.color }}>{m.val}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${m.val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: m.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-16 bg-white/[0.02] border-y border-white/[0.05]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3 tracking-tight">Core Values</h2>
            <p className="text-white/45 max-w-xl mx-auto">The principles that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass-card p-6 border border-white/[0.07] group hover:border-primary/20"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <v.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-bold text-white/90 mb-2">{v.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black mb-3 tracking-tight">Our Journey</h2>
            <p className="text-white/45">From idea to global protocol.</p>
          </div>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/40 to-transparent" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative flex flex-col sm:flex-row items-start gap-6 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 mt-1.5 z-10" />
                  {/* Content */}
                  <div className={`pl-10 sm:pl-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:text-right sm:pr-8" : "sm:text-left sm:pl-8"}`}>
                    <span className="text-xs font-black text-primary uppercase tracking-wider">{m.year}</span>
                    <h4 className="font-bold text-white/90 mt-1 mb-1.5">{m.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed">{m.desc}</p>
                  </div>
                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3 tracking-tight">The Team</h2>
            <p className="text-white/45 max-w-xl mx-auto">A global team of builders, researchers, and Web3 veterans.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {team.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass-card p-6 text-center border border-white/[0.07] group hover:border-primary/20"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.bg} flex items-center justify-center text-white font-black text-lg mx-auto mb-4 shadow-lg`}>
                  {t.avatar}
                </div>
                <p className="font-bold text-white/90 text-sm mb-1">{t.name}</p>
                <p className="text-xs text-white/35">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 sm:p-16 border border-primary/15 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/8 pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-black mb-4">Ready to join us?</h2>
              <p className="text-white/50 mb-8 max-w-lg mx-auto">Start earning $EFX today or dive into the technical documentation to learn how it all works.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/tasks" className="btn-primary px-8 py-3 flex items-center gap-2 justify-center">
                  Browse Tasks <ArrowRight size={16} />
                </Link>
                <Link href="/docs" className="btn-secondary px-8 py-3">
                  Read Docs
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

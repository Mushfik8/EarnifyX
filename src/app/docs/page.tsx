"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Download,
  BookOpen,
  FileText,
  Share2,
  Send,
  Code,
  Mail,
  ArrowRight,
  Book,
  Rocket,
  MousePointer2,
  Coins,
  Cpu,
  PieChart,
  Map,
  ShieldCheck,
  HelpCircle,
  ExternalLink,
  Zap,
  Globe,
} from "lucide-react";

const docLinks = [
  { slug: "introduction", icon: Book, label: "Introduction", desc: "What EarnifyX is and the problems it solves." },
  { slug: "getting-started", icon: Rocket, label: "Getting Started", desc: "Connect wallet, browse tasks, earn $EFX." },
  { slug: "platform-guide", icon: MousePointer2, label: "Platform Guide", desc: "Task categories, tiers, and reputation system." },
  { slug: "token", icon: Coins, label: "Token ($EFX)", desc: "Utility, governance, and staking mechanics." },
  { slug: "ai-system", icon: Cpu, label: "AI System", desc: "How the AI engine verifies and prevents fraud." },
  { slug: "tokenomics", icon: PieChart, label: "Tokenomics", desc: "Token distribution and economic design." },
  { slug: "roadmap", icon: Map, label: "Roadmap", desc: "Our phased strategy from MVP to global scale." },
  { slug: "security", icon: ShieldCheck, label: "Security", desc: "Smart contract audits and protocol safeguards." },
  { slug: "faq", icon: HelpCircle, label: "FAQ", desc: "Answers to the most common questions." },
];

const socials = [
  { icon: Share2, label: "Twitter / X", handle: "@earnifyx", href: "https://twitter.com/earnifyx", color: "#1DA1F2" },
  { icon: Send, label: "Telegram", handle: "t.me/earnifyxtoken", href: "https://t.me/earnifyxtoken", color: "#2AABEE" },
  { icon: Globe, label: "Discord", handle: "discord.gg/earnifyx", href: "#", color: "#5865F2" },
  { icon: Code, label: "GitHub", handle: "github.com/earnifyx", href: "#", color: "#E6EDF3" },
  { icon: Mail, label: "Email", handle: "hello@earnifyx.io", href: "mailto:hello@earnifyx.io", color: "#A78BFA" },
];

const downloads = [
  {
    title: "Technical Whitepaper",
    desc: "Full protocol specification, tokenomics, and architecture documentation.",
    tag: "PDF · 2.4 MB",
    icon: FileText,
    href: "/Earnifyx_Whitepaper_v1.0.pdf",
    filename: "EarnifyX-Whitepaper-v1.pdf",
    color: "from-blue-500/15 to-violet-500/10",
    border: "border-blue-500/20",
    accent: "#3B82F6",
  },
  {
    title: "Investor Pitch Deck",
    desc: "Comprehensive investor presentation covering market opportunity and vision.",
    tag: "PDF · 5.1 MB",
    icon: BookOpen,
    href: "/Pitch_Deck.pdf",
    filename: "EarnifyX-PitchDeck-2025.pdf",
    color: "from-violet-500/15 to-pink-500/10",
    border: "border-violet-500/20",
    accent: "#8B5CF6",
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-white/50 mb-6"
          >
            <Zap size={12} className="text-primary" />
            Documentation Hub
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5"
          >
            EarnifyX <span className="neon-text">Resources</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to understand the EarnifyX protocol — technical docs, investor materials, and community links.
          </motion.p>
        </div>
      </section>

      {/* Downloads */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-black uppercase tracking-[0.18em] text-white/30 mb-6">
            Downloads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {downloads.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className={`relative glass-card p-6 sm:p-8 bg-gradient-to-br ${d.color} border ${d.border} group overflow-hidden`}
              >
                {/* Glow */}
                <div
                  className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-[60px] opacity-20 group-hover:opacity-35 transition-opacity"
                  style={{ backgroundColor: d.accent }}
                />
                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${d.accent}20`, border: `1px solid ${d.accent}30` }}
                    >
                      <d.icon size={22} style={{ color: d.accent }} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/30 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                      {d.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white/90">{d.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed mb-6">{d.desc}</p>
                  <a
                    href={d.href}
                    download
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 group-hover:gap-3"
                    style={{
                      background: `linear-gradient(135deg, ${d.accent}cc, ${d.accent}88)`,
                      boxShadow: `0 4px 20px -4px ${d.accent}40`,
                    }}
                  >
                    <Download size={15} />
                    Download PDF
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doc Sections Grid */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-black uppercase tracking-[0.18em] text-white/30 mb-6">
            Protocol Documentation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {docLinks.map((doc, i) => (
              <motion.div
                key={doc.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  href={`/docs/${doc.slug}`}
                  className="flex gap-4 p-5 rounded-xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors border border-primary/15">
                    <doc.icon size={16} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-sm text-white/85 group-hover:text-white transition-colors mb-1">
                      {doc.label}
                    </p>
                    <p className="text-xs text-white/35 leading-snug line-clamp-2">{doc.desc}</p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="flex-shrink-0 text-white/20 group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-1 self-start"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social / Community Links */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-black uppercase tracking-[0.18em] text-white/30 mb-6">
            Community & Social
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-4 p-5 rounded-xl border border-white/[0.07] bg-white/[0.03] hover:border-white/15 transition-all duration-200 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
                  style={{ backgroundColor: `${s.color}18`, border: `1px solid ${s.color}25` }}
                >
                  <s.icon size={18} style={{ color: s.color }} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-sm text-white/80 group-hover:text-white transition-colors">
                    {s.label}
                  </p>
                  <p className="text-xs text-white/30 truncate">{s.handle}</p>
                </div>
                <ExternalLink size={13} className="text-white/20 group-hover:text-white/50 flex-shrink-0 transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

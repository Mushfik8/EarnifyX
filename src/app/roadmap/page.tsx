"use client";

import RoadmapTimeline from "@/components/RoadmapTimeline";

export default function RoadmapPage() {
  const phases = [
    {
      phase: "Phase 1",
      title: "MVP Launch & Initial Operations",
      date: "Q2 2025",
      status: "Completed" as const,
      items: [
        "Core web application launch with task marketplace",
        "Initial smart contract deployment on testnet",
        "Basic AI verification for social tasks",
        "Onboarding founding user cohort",
        "Establishment of initial business partnerships",
      ],
    },
    {
      phase: "Phase 2",
      title: "Token Launch & Public Availability",
      date: "Q3 2025",
      status: "Current" as const,
      items: [
        "$EFX Token Generation Event (TGE)",
        "Mainnet deployment of audited smart contracts",
        "Launch of staking system & reward distribution",
        "Activation of referral program & commissions",
        "Expansion of task categories (Micro-tasks)",
      ],
    },
    {
      phase: "Phase 3",
      title: "AI Enhancement & Fraud Prevention",
      date: "Q4 2025",
      status: "Upcoming" as const,
      items: [
        "Advanced AI fraud detection models deployment",
        "Integration of cross-platform verification APIs",
        "Reputation scoring system (On-chain NFTs)",
        "Dynamic reward optimization algorithms",
        "Premium task marketplace with gated access",
      ],
    },
    {
      phase: "Phase 4",
      title: "Mobile App & Global Expansion",
      date: "Q1-Q2 2026",
      status: "Upcoming" as const,
      items: [
        "Launch of iOS and Android mobile applications",
        "Localization in 10+ languages",
        "Multi-chain integration for lower fees",
        "Fiat on-ramps and off-ramps integration",
        "Strategic regional exchange partnerships",
      ],
    },
    {
      phase: "Phase 5",
      title: "DAO Governance & Decentralization",
      date: "Q3-Q4 2026",
      status: "Upcoming" as const,
      items: [
        "Transition to full DAO structure",
        "Governance portal launch for voting",
        "Ecosystem grant program establishment",
        "Community-driven protocol upgrades",
        "Specialized working groups formation",
      ],
    },
    {
      phase: "Phase 6",
      title: "Exchange Listings & Institutional Adoption",
      date: "2027+",
      status: "Upcoming" as const,
      items: [
        "Tier 1 Centralized Exchange listings (CEX)",
        "Institutional-grade API for enterprise clients",
        "B2B SaaS model for corporate campaigns",
        "Web3 identity protocol integrations",
        "Cross-chain interoperability enhancements",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col gap-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-black mb-6">Project <span className="neon-text">Roadmap</span></h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            Our strategic journey to revolutionize the task-to-earn economy through decentralization and intelligent automation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto w-full">
          <RoadmapTimeline phases={phases} />
        </div>

        {/* Note */}
        <div className="glass-card p-8 border border-white/5 text-center max-w-2xl mx-auto">
          <p className="text-sm text-foreground/50 italic">
            * Note: This roadmap is subject to community governance decisions and protocol development priorities. Follow our official channels for real-time updates.
          </p>
        </div>
      </div>
    </div>
  );
}

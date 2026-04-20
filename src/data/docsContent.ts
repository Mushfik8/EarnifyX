export type DocSection = {
  id: string;
  title: string;
  body?: string[];
  list?: string[];
  cards?: { title: string; subtitle?: string; text?: string }[];
};

export type DocData = {
  title: string;
  description?: string;
  sections: DocSection[];
};

export const docsContent: Record<string, DocData> = {
  "introduction": {
    title: "Introduction",
    description: "EarnifyX is a decentralized, AI-powered task and earning protocol.",
    sections: [
      {
        id: "vision",
        title: "Vision & Mission",
        body: [
          "Our mission is to establish a new standard for the task-to-earn economy. We aim to empower millions of individuals worldwide with flexible income opportunities while providing businesses with verifiable engagement and growth.",
        ],
      },
      {
        id: "problems",
        title: "Problems We Solve",
        list: [
          "Centralized Extraction: Traditional platforms take large fees — EarnifyX minimizes overhead through smart contracts.",
          "Fraud & Bots: Many existing platforms suffer from fake engagement. Our AI ensures high-confidence verification.",
          "Payment Barriers: Global crypto settlement removes geographic payment restrictions."
        ]
      },
    ]
  },
  "getting-started": {
    title: "Getting Started",
    description: "Quick setup to start earning on EarnifyX.",
    sections: [
      {
        id: "steps",
        title: "Quick Start Steps",
        cards: [
          { title: "Connect Your Wallet", subtitle: "MetaMask, WalletConnect", text: "Click the 'Connect Wallet' button in the top navigation to get started." },
          { title: "Complete Your Profile", subtitle: "Optional KYC for advanced tiers", text: "Add basic details to help our AI match you with tasks." },
          { title: "Browse the Marketplace", subtitle: "Tasks filtered by reward and difficulty", text: "Use filters to find tasks that match your skills and time." },
          { title: "Submit Evidence", subtitle: "Proof & verification", text: "Upload screenshots or links and let our AI verify instantly." },
        ]
      }
    ]
  },
  "platform-guide": {
    title: "Platform Guide",
    description: "How to navigate the EarnifyX dashboard and maximize efficiency.",
    sections: [
      {
        id: "categories",
        title: "Task Categories",
        list: [
          "Social Tasks — Likes, follows, retweets, community joining.",
          "Micro Tasks — Data labeling, surveys, app testing.",
          "Premium Tasks — Content creation and expert reviews for high rewards."
        ]
      },
      {
        id: "reputation",
        title: "Reputation & Tiers",
        body: [
          "Your Reputation Score is the central metric. It's based on accuracy, tenure, and staking activity. Higher reputation unlocks better-paying tasks and features."
        ]
      }
    ]
  },
  "token": {
    title: "Token ($EFX)",
    description: "$EFX is the native utility token of EarnifyX.",
    sections: [
      {
        id: "utility",
        title: "Token Utility",
        list: [
          "Payment Medium — All rewards are distributed in $EFX.",
          "Staking Asset — Stake to unlock multipliers and APY.",
          "Governance — Holders vote on protocol parameters."
        ]
      }
    ]
  },
  "ai-system": {
    title: "AI System",
    description: "How our AI verifies evidence and prevents fraud.",
    sections: [
      {
        id: "verification",
        title: "Evidence Verification",
        body: [
          "We use Computer Vision and NLP to analyze screenshots and links, achieving high accuracy in automated verification."
        ]
      },
      {
        id: "fraud-detection",
        title: "Behavioral Fraud Detection",
        body: [
          "Machine learning models identify non-human patterns and coordinated farming attacks, protecting business value."
        ]
      }
    ]
  },
  "tokenomics": {
    title: "Tokenomics",
    description: "Token distribution and economics for $EFX.",
    sections: [
      {
        id: "distribution",
        title: "Token Distribution",
        list: [
          "Rewards Pool — 30%",
          "Liquidity — 20%",
          "Team & Advisors — 15%",
          "Marketing — 15%",
          "Ecosystem — 10%",
          "Strategic Reserve — 10%"
        ]
      }
    ]
  },
  "roadmap": {
    title: "Roadmap",
    description: "Our phased approach to product and protocol growth.",
    sections: [
      {
        id: "phases",
        title: "Phases",
        list: [
          "Phase 1 (Q2 2025) — MVP & Beta",
          "Phase 2 (Q3 2025) — Token Launch",
          "Phase 3 (Q4 2025) — AI V2 & Reputation",
          "Phase 4 (2026) — Mobile & Global"
        ]
      }
    ]
  },
  "security": {
    title: "Security",
    description: "Security practices and audits for the protocol.",
    sections: [
      {
        id: "measures",
        title: "Security Measures",
        list: [
          "Audited Smart Contracts — Public audit reports.",
          "Multi-Sig Treasury — Gnosis Safe multi-sig governance.",
          "Bug Bounty Program — Rewards for vulnerabilities."
        ]
      }
    ]
  },
  "faq": {
    title: "FAQ",
    description: "Frequently asked questions about EarnifyX.",
    sections: [
      {
        id: "general",
        title: "Common Questions",
        list: [
          "Is EarnifyX global? — Yes, anyone with a wallet can join.",
          "Can I earn without staking? — Yes, staking is optional.",
          "What if AI rejects my task? — You can appeal for human review."
        ]
      }
    ]
  }
};

export const allDocSlugs = Object.keys(docsContent);

export default docsContent;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Book,
  Rocket,
  MousePointer2,
  Coins,
  Cpu,
  PieChart,
  Map,
  ShieldCheck,
  HelpCircle,
  ChevronRight,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import docsContent from "@/data/docsContent";

const iconFor = (slug: string) => {
  const icons: Record<string, any> = {
    "introduction": Book,
    "getting-started": Rocket,
    "platform-guide": MousePointer2,
    "token": Coins,
    "ai-system": Cpu,
    "tokenomics": PieChart,
    "roadmap": Map,
    "security": ShieldCheck,
    "faq": HelpCircle,
  };
  return icons[slug] ?? Book;
};

const DocsSidebar = () => {
  const pathname = usePathname() ?? "";
  const entries = Object.entries(docsContent);

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto py-6">
      {/* Header */}
      <div className="px-5 mb-6">
        <div className="flex items-center gap-2.5 mb-1">
          <BookOpen size={15} className="text-blue-400" strokeWidth={2.5} />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
            Documentation
          </span>
        </div>
        <div className="h-px bg-gradient-to-r from-blue-500/20 to-transparent mt-3" />
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col gap-0.5 px-3">
        {entries.map(([slug, doc], index) => {
          const Icon = iconFor(slug);
          const href = `/docs/${slug}`;
          const isActive = pathname === href;

          return (
            <motion.div
              key={slug}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.04 }}
            >
              <Link
                href={href}
                className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group ${
                  isActive
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-white/45 hover:text-white/80 hover:bg-white/[0.04]"
                }`}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.span
                    layoutId="sidebar-pill"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-blue-400 rounded-full"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                  />
                )}

                <Icon
                  size={15}
                  className={`flex-shrink-0 transition-colors duration-200 ${
                    isActive ? "text-blue-400" : "text-white/30 group-hover:text-white/60"
                  }`}
                  strokeWidth={2}
                />
                <span className="font-medium leading-none">{doc.title}</span>

                {isActive && (
                  <ChevronRight size={13} className="ml-auto text-blue-400/60" />
                )}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="mt-auto px-5 pt-6">
        <div className="h-px bg-gradient-to-r from-white/5 to-transparent mb-4" />
        <a
          href="#"
          className="flex items-center gap-2 text-[11px] font-semibold text-white/25 hover:text-white/50 transition-colors"
        >
          <ExternalLink size={11} />
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default DocsSidebar;

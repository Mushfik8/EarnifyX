import Link from "next/link";
import { Zap, Send, Code, Share2, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const links = {
    Platform: [
      { name: "Dashboard", href: "/dashboard" },
      { name: "Task Marketplace", href: "/tasks" },
      { name: "Token ($EFX)", href: "/token" },
      { name: "Roadmap", href: "/roadmap" },
      { name: "Community", href: "/community" },
      { name: "About", href: "/about" },
    ],
    Resources: [
      { name: "Documentation", href: "/docs" },
      { name: "Whitepaper", href: "/whitepaper.pdf" },
      { name: "Pitch Deck", href: "/pitch-deck.pdf" },
      { name: "AI System", href: "/docs/ai-system" },
      { name: "FAQ", href: "/faq" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  const socials = [
    { icon: Share2, label: "Twitter", href: "#" },
    { icon: Send, label: "Telegram", href: "#" },
    { icon: Code, label: "GitHub", href: "#" },
    { icon: Mail, label: "Email", href: "#" },
  ];

  return (
    <footer className="border-t border-white/[0.06] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                <Zap className="text-white w-4 h-4" strokeWidth={2.5} />
              </div>
              <span className="text-base font-black tracking-tight">
                Earnify<span className="text-blue-400">X</span>
              </span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              The world's first AI-powered, decentralized task protocol. Earn $EFX for verified contributions.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-2 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.08] bg-white/[0.03] text-white/40 hover:text-white/80 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200"
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/25 mb-4">
                {group}
              </p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item.name}>
                    {item.href.endsWith('.pdf') ? (
                      <a
                        href={item.href}
                        download
                        className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.05]">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} EarnifyX Protocol. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { Link as LinkIcon, ChevronRight, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { DocData, DocSection } from "@/data/docsContent";
import docsContent from "@/data/docsContent";

const DocsReader = ({ doc, slug }: { doc: DocData; slug: string }) => {
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const copyLink = useCallback(
    (id: string) => {
      const url = `${window.location.origin}/docs/${slug}#${id}`;
      navigator.clipboard.writeText(url).catch(() => {});
    },
    [slug]
  );

  const allSlugs = Object.keys(docsContent);
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;
  const prevDoc = prevSlug ? docsContent[prevSlug] : null;
  const nextDoc = nextSlug ? docsContent[nextSlug] : null;

  return (
    <div className="min-h-screen px-4 sm:px-6 py-8 sm:py-14">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-white/30 mb-8 flex-wrap">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/docs" className="hover:text-white/60 transition-colors">Docs</Link>
            <ChevronRight size={11} />
            <span className="text-primary">{doc.title}</span>
          </div>

          {/* Title Block */}
          <div className="mb-10 pb-8 border-b border-white/[0.06]">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-3 leading-tight">
              {doc.title}
            </h1>
            {doc.description && (
              <p className="text-base text-white/50 leading-relaxed max-w-2xl">
                {doc.description}
              </p>
            )}
            <div className="flex items-center gap-2 mt-5 text-xs text-white/25 font-medium">
              <Calendar size={12} />
              <span>Updated April 2025</span>
            </div>
          </div>

          {/* Inline TOC (mobile-friendly) */}
          {doc.sections.length > 1 && (
            <div className="mb-10 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/25 mb-3">On this page</p>
              <div className="flex flex-col gap-1">
                {doc.sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className="text-left text-sm text-white/40 hover:text-primary py-0.5 transition-colors"
                  >
                    → {s.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Content Sections */}
          <div className="space-y-12">
            {doc.sections.map((section: DocSection, si) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: si * 0.05 }}
              >
                <div className="group flex items-center gap-2 mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white/90">
                    {section.title}
                  </h2>
                  <button
                    aria-label="Copy link"
                    onClick={() => copyLink(section.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-white/25 hover:text-primary p-1 rounded"
                  >
                    <LinkIcon size={13} />
                  </button>
                </div>

                {section.body?.map((p, i) => (
                  <p key={i} className="text-white/55 leading-[1.8] mb-3 text-[0.9375rem]">
                    {p}
                  </p>
                ))}

                {section.list && (
                  <ul className="space-y-3 mt-2">
                    {section.list.map((li, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 text-sm sm:text-[0.9375rem] text-white/55 leading-relaxed"
                      >
                        <span className="mt-[0.4rem] w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{li}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}

                {section.cards && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {section.cards.map((c, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        whileHover={{ y: -2 }}
                        className="p-5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-primary/20 transition-all duration-300"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-5 h-5 rounded-md bg-primary/15 flex items-center justify-center text-primary text-[10px] font-black flex-shrink-0">
                            {i + 1}
                          </span>
                          <h4 className="font-bold text-white/90 text-sm">{c.title}</h4>
                        </div>
                        {c.subtitle && (
                          <p className="text-xs text-primary/70 font-medium mb-1.5">{c.subtitle}</p>
                        )}
                        {c.text && (
                          <p className="text-white/45 text-sm leading-relaxed">{c.text}</p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.section>
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-8 border-t border-white/[0.06]">
            {prevDoc && prevSlug ? (
              <Link
                href={`/docs/${prevSlug}`}
                className="flex-1 group flex items-center gap-3 p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-200"
              >
                <ArrowLeft size={16} className="text-white/30 group-hover:text-primary transition-colors flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/25 mb-0.5">Previous</p>
                  <p className="text-sm font-semibold text-white/70 group-hover:text-white/90 truncate">{prevDoc.title}</p>
                </div>
              </Link>
            ) : (
              <Link
                href="/docs"
                className="flex items-center gap-2 text-sm text-white/30 hover:text-primary transition-colors"
              >
                <ArrowLeft size={14} />
                Back to Docs
              </Link>
            )}

            {nextDoc && nextSlug ? (
              <Link
                href={`/docs/${nextSlug}`}
                className="flex-1 group flex items-center justify-end gap-3 p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-200 text-right"
              >
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/25 mb-0.5">Next</p>
                  <p className="text-sm font-semibold text-white/70 group-hover:text-white/90 truncate">{nextDoc.title}</p>
                </div>
                <ArrowRight size={16} className="text-white/30 group-hover:text-primary transition-colors flex-shrink-0" />
              </Link>
            ) : <div className="flex-1" />}
          </div>

          {/* Back to hub */}
          <div className="mt-8 text-center">
            <Link href="/docs" className="text-xs text-white/25 hover:text-white/50 transition-colors">
              ← Back to documentation hub
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DocsReader;

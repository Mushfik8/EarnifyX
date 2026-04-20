"use client";

import { CheckCircle2, Circle } from "lucide-react";
import { motion } from "framer-motion";

interface RoadmapItem {
  phase: string;
  title: string;
  date: string;
  items: string[];
  status: "Completed" | "Current" | "Upcoming";
}

const RoadmapTimeline = ({ phases }: { phases: RoadmapItem[] }) => {
  return (
    <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/60 before:via-secondary/40 before:to-transparent">
      {phases.map((item, index) => (
        <motion.div 
          key={index} 
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-background bg-white/5 shadow-lg shadow-primary/20 flex-shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
            {item.status === "Completed" ? (
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="flex items-center justify-center w-full h-full"
              >
                <CheckCircle2 className="text-green-400 w-6 h-6" />
              </motion.div>
            ) : item.status === "Current" ? (
              <motion.div 
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/50"
              />
            ) : (
              <Circle className="text-foreground/30 w-5 h-5" />
            )}
          </div>

          {/* Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 border border-white/5 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between space-x-2 mb-3">
              <div className="font-black text-primary uppercase text-xs tracking-widest bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{item.phase}</div>
              <time className="font-mono text-xs text-foreground/50 font-bold bg-white/5 px-2 py-1 rounded">{item.date}</time>
            </div>
            <div className="text-xl font-bold mb-4 text-foreground/90">{item.title}</div>
            <ul className="space-y-2.5">
              {item.items.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/60 leading-relaxed font-medium">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mt-1.5 flex-shrink-0 shadow-lg shadow-primary/30" 
                  />
                  {point}
                </li>
              ))}
            </ul>
            {item.status === "Current" && (
              <motion.div 
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-4 pt-4 border-t border-white/5"
              >
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">In Progress</span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default RoadmapTimeline;

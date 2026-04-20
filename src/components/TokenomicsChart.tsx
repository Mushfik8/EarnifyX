"use client";

import { motion } from "framer-motion";

interface Allocation {
  label: string;
  percentage: number;
  color: string;
}

const TokenomicsChart = () => {
  const allocations: Allocation[] = [
    { label: "Rewards Pool", percentage: 30, color: "#3B82F6" },
    { label: "Liquidity", percentage: 20, color: "#60A5FA" },
    { label: "Team & Advisors", percentage: 15, color: "#8B5CF6" },
    { label: "Marketing", percentage: 15, color: "#A78BFA" },
    { label: "Ecosystem", percentage: 10, color: "#BC13FE" },
    { label: "Strategic Reserve", percentage: 10, color: "#00F2FF" },
  ];

  return (
    <div className="flex flex-col gap-10">
      {/* Bars */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex h-14 w-full rounded-2xl overflow-hidden glass border border-white/10 p-1.5 gap-1.5 shadow-lg shadow-primary/10"
      >
        {allocations.map((item, index) => (
          <motion.div
            key={index}
            initial={{ width: 0 }}
            whileInView={{ width: `${item.percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            style={{ backgroundColor: item.color }}
            className="h-full rounded-lg group relative hover:shadow-lg hover:shadow-current/50 transition-all cursor-pointer"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20"
            >
              <div className="glass px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap border border-white/10 shadow-lg">
                {item.label}: {item.percentage}%
              </div>
              <div className="w-2 h-2 rotate-45 bg-white/10 border-r border-b border-white/20 absolute top-[calc(100%-4px)] left-1/2 -translate-x-1/2" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Legend */}
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        {allocations.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -2 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 p-4 glass-card border border-white/5 hover:border-white/10 transition-all duration-300 rounded-lg"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="w-4 h-4 rounded-full flex-shrink-0 shadow-lg" 
              style={{ backgroundColor: item.color }}
            />
            <div>
              <p className="text-xs text-foreground/50 font-bold uppercase tracking-widest">{item.label}</p>
              <p className="text-lg font-black">{item.percentage}%</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TokenomicsChart;

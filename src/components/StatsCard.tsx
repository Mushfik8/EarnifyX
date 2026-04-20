"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatsCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  isPositive?: boolean;
}

const StatsCard = ({ label, value, icon: Icon, trend, isPositive }: StatsCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="glass-card p-6 flex flex-col gap-4 min-w-[240px] border border-white/5"
    >
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30 shadow-lg shadow-primary/10">
          <Icon className="text-primary w-6 h-6" />
        </div>
        {trend && (
          <motion.span 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className={`text-xs font-bold px-2.5 py-1 rounded-full font-semibold ${
              isPositive ? "bg-green-500/15 text-green-400 border border-green-500/20" : "bg-red-500/15 text-red-400 border border-red-500/20"
            }`}
          >
            {trend}
          </motion.span>
        )}
      </div>
      <div>
        <p className="text-foreground/50 text-xs font-bold uppercase tracking-widest">{label}</p>
        <h3 className="text-3xl font-black mt-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">{value}</h3>
      </div>
    </motion.div>
  );
};

export default StatsCard;

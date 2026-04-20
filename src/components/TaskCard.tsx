"use client";

import { CheckCircle2, Clock, Zap, Star } from "lucide-react";
import { motion } from "framer-motion";

interface TaskCardProps {
  title: string;
  reward: string;
  category: "Social" | "Micro" | "Premium";
  difficulty: "Easy" | "Medium" | "Hard";
  status?: "Available" | "Completed" | "Pending";
  timeLeft?: string;
}

const TaskCard = ({ title, reward, category, difficulty, status = "Available", timeLeft }: TaskCardProps) => {
  const categoryStyles = {
    Social: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    Micro: "bg-purple-500/15 text-purple-400 border-purple-500/20",
    Premium: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  };

  const difficultyIcons = {
    Easy: <Zap size={14} />,
    Medium: <Star size={14} />,
    Hard: <Star size={14} fill="currentColor" />,
  };

  const difficultyColors = {
    Easy: "text-green-400",
    Medium: "text-blue-400",
    Hard: "text-red-400",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="glass-card p-6 flex flex-col gap-5 border border-white/5 hover:border-primary/30 group"
    >
      <div className="flex justify-between items-start gap-4">
        <span className={`text-[11px] uppercase tracking-widest font-bold px-2.5 py-1.5 rounded-lg border ${categoryStyles[category]} flex-shrink-0`}>
          {category}
        </span>
        {timeLeft && (
          <motion.div 
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-1.5 text-xs text-foreground/50 font-semibold flex-shrink-0"
          >
            <Clock size={14} className="text-amber-400" />
            {timeLeft}
          </motion.div>
        )}
      </div>

      <div className="flex-1">
        <h4 className="text-lg font-bold line-clamp-2 mb-3 group-hover:text-primary transition-colors duration-300">{title}</h4>
        <div className="flex items-center gap-2.5 text-sm text-foreground/60 font-medium">
          <span className={`flex items-center gap-1 ${difficultyColors[difficulty]}`}>
            {difficultyIcons[difficulty]}
            {difficulty}
          </span>
          <span className="text-foreground/30">•</span>
          <span>AI Verified</span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-auto pt-5 border-t border-white/5">
        <div>
          <p className="text-[11px] uppercase text-foreground/40 font-bold tracking-widest mb-1">Reward</p>
          <p className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{reward} <span className="text-sm font-bold text-foreground/80">$EFX</span></p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`btn-primary !px-5 !py-2.5 text-sm font-semibold ${status === "Completed" ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {status === "Available" ? "Start Task" : status}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TaskCard;

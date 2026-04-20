"use client";

import { motion } from "framer-motion";
import { 
  Wallet, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  Shield,
  Zap,
  Target,
  Trophy
} from "lucide-react";
import StatsCard from "@/components/StatsCard";
import TaskCard from "@/components/TaskCard";

export default function Dashboard() {
  const userStats = [
    { label: "Total Earnings", value: "12,450 EFX", icon: Wallet, trend: "+450 today", isPositive: true },
    { label: "Tasks Completed", value: "142", icon: CheckCircle2, trend: "Tier 2", isPositive: true },
    { label: "Reputation Score", value: "94/100", icon: Shield, trend: "Excellent", isPositive: true },
    { label: "Pending Rewards", value: "850 EFX", icon: Clock },
  ];

  const recentTasks = [
    {
      title: "Join EarnifyX Telegram Community",
      reward: "30",
      category: "Social" as const,
      difficulty: "Easy" as const,
      status: "Available" as const,
    },
    {
      title: "Review EarnifyX UI on ProductHunt",
      reward: "100",
      category: "Social" as const,
      difficulty: "Medium" as const,
      status: "Available" as const,
    },
  ];

  const dailyMissions = [
    { title: "Complete 3 Social Tasks", progress: 66, goal: "2/3", reward: "25 EFX" },
    { title: "Stake 1000 EFX", progress: 0, goal: "0/1000", reward: "1.5x Multiplier" },
    { title: "Refer 1 New User", progress: 100, goal: "1/1", reward: "50 EFX", completed: true },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl font-black mb-2">Welcome Back, <span className="neon-text">Explorer</span></h1>
            <p className="text-foreground/50">Track your tasks, earnings, and protocol reputation.</p>
          </div>
          <div className="flex gap-4">
            <button className="btn-secondary flex items-center gap-2">
              <Zap size={18} className="text-primary" />
              Upgrade Tier
            </button>
            <button className="btn-primary flex items-center gap-2">
              <Wallet size={18} />
              Withdraw EFX
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {userStats.map((stat, i) => (
            <StatsCard key={i} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Active Tasks Marketplace Preview */}
            <div className="glass-card p-8 border border-white/5">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Target className="text-primary" />
                  Recommended Tasks
                </h3>
                <button className="text-sm text-primary font-bold hover:underline">View All</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentTasks.map((task, i) => (
                  <TaskCard key={i} {...task} />
                ))}
              </div>
            </div>

            {/* Reputation/Levels */}
            <div className="glass-card p-8 border border-white/5">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
                <Shield className="text-primary" />
                Reputation Progress
              </h3>
              <div className="relative pt-1">
                <div className="flex mb-4 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-primary/10 text-primary">
                      Silver Tier
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-primary">
                      85% to Gold
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-white/5 border border-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-primary to-secondary"
                  />
                </div>
                <p className="text-sm text-foreground/50 leading-relaxed">
                  You are in the top 5% of users this week. Complete 3 more Premium tasks to unlock Gold Tier benefits.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="flex flex-col gap-8">
            {/* Daily Missions */}
            <div className="glass-card p-8 border border-white/5">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-8">
                <Trophy className="text-secondary" />
                Daily Missions
              </h3>
              <div className="space-y-6">
                {dailyMissions.map((mission, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className={`font-semibold ${mission.completed ? "text-green-500 line-through" : ""}`}>
                        {mission.title}
                      </span>
                      <span className="text-xs font-black text-primary">{mission.reward}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-grow h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${mission.completed ? "bg-green-500" : "bg-primary"}`} 
                          style={{ width: `${mission.progress}%` }} 
                        />
                      </div>
                      <span className="text-[10px] font-bold text-foreground/40">{mission.goal}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wallet Quick View */}
            <div className="glass-card p-8 border border-primary/20 bg-primary/5">
              <h3 className="text-lg font-bold mb-4">Staked Balance</h3>
              <p className="text-3xl font-black text-primary mb-2">5,000 <span className="text-sm font-medium">$EFX</span></p>
              <p className="text-xs text-foreground/50 mb-6 flex items-center gap-1">
                <TrendingUp size={12} className="text-green-500" />
                APY: 24.5%
              </p>
              <button className="btn-primary w-full py-3">Manage Staking</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

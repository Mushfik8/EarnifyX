"use client";

import { useState } from "react";
import { Search, Filter, SlidersHorizontal, ArrowUpRight } from "lucide-react";
import TaskCard from "@/components/TaskCard";

export default function TasksPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Social", "Micro", "Premium"];

  const tasks = [
    {
      title: "Join EarnifyX Discord Server",
      reward: "25",
      category: "Social" as const,
      difficulty: "Easy" as const,
      status: "Available" as const,
    },
    {
      title: "Complete EarnifyX Ecosystem Survey",
      reward: "75",
      category: "Micro" as const,
      difficulty: "Medium" as const,
      status: "Available" as const,
    },
    {
      title: "Create a Twitter Thread about EarnifyX AI",
      reward: "500",
      category: "Social" as const,
      difficulty: "Medium" as const,
      status: "Available" as const,
    },
    {
      title: "Annotate 100 Satellite Images for AI",
      reward: "400",
      category: "Micro" as const,
      difficulty: "Hard" as const,
      status: "Available" as const,
    },
    {
      title: "YouTube Video Review: EarnifyX Platform",
      reward: "2000",
      category: "Premium" as const,
      difficulty: "Hard" as const,
      status: "Available" as const,
    },
    {
      title: "Retweet EarnifyX x Partners Announcement",
      reward: "15",
      category: "Social" as const,
      difficulty: "Easy" as const,
      status: "Available" as const,
    },
    {
      title: "EarnifyX Beta App Bug Reporting",
      reward: "300",
      category: "Premium" as const,
      difficulty: "Medium" as const,
      status: "Available" as const,
    },
    {
      title: "Translation: Whitepaper to Spanish",
      reward: "1200",
      category: "Premium" as const,
      difficulty: "Hard" as const,
      status: "Available" as const,
    },
  ];

  const filteredTasks = activeCategory === "All" 
    ? tasks 
    : tasks.filter(t => t.category === activeCategory);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black mb-4">Task <span className="neon-text">Marketplace</span></h1>
            <p className="text-foreground/60">
              Browse and complete tasks to earn $EFX tokens. All submissions are automatically verified by the EarnifyX AI Engine.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 w-full lg:w-auto">
            <div className="relative flex-grow lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={18} />
              <input 
                type="text" 
                placeholder="Search tasks..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <button className="btn-secondary flex items-center gap-2">
              <SlidersHorizontal size={18} />
              Filters
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 p-1.5 glass rounded-2xl w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeCategory === cat 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "text-foreground/50 hover:text-foreground hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTasks.map((task, i) => (
            <TaskCard key={i} {...task} />
          ))}
        </div>

        {/* Empty State / Load More */}
        <div className="flex flex-col items-center justify-center py-20 gap-6 border-t border-white/5">
          <p className="text-foreground/40">Showing {filteredTasks.length} tasks</p>
          <button className="btn-secondary px-12">Load More Tasks</button>
        </div>
      </div>
    </div>
  );
}

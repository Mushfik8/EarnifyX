"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  CheckCircle2, 
  Zap, 
  Shield, 
  ArrowRight, 
  TrendingUp, 
  Cpu, 
  Database,
  Lock,
  Globe
} from "lucide-react";
import Link from "next/link";
import StatsCard from "@/components/StatsCard";
import TaskCard from "@/components/TaskCard";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const featuredTasks = [
    {
      title: "Follow EarnifyX Official X Account",
      reward: "50",
      category: "Social" as const,
      difficulty: "Easy" as const,
      timeLeft: "2d remaining",
    },
    {
      title: "Annotate 50 AI Training Images",
      reward: "250",
      category: "Micro" as const,
      difficulty: "Medium" as const,
      timeLeft: "12h remaining",
    },
    {
      title: "EarnifyX Ambassador Video Review",
      reward: "1500",
      category: "Premium" as const,
      difficulty: "Hard" as const,
    },
  ];

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 relative pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm hover:bg-primary/15 hover:border-primary/30 transition-all duration-300"
            >
              <Zap size={14} />
              AI-Powered Earning Protocol
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8"
            >
              Complete Tasks. <br />
              <span className="neon-text">Earn Crypto.</span> <br />
              Scale with AI.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg lg:text-xl text-foreground/70 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 font-medium"
            >
              The world's first decentralized, AI-powered task protocol. Create a transparent, efficient, and fraud-resistant marketplace where you earn $EFX for your digital contributions.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/dashboard" className="btn-primary flex items-center justify-center gap-2 text-lg px-10 py-4 font-semibold">
                  Launch Dashboard
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="/whitepaper.pdf" download className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4 font-semibold">
                  Whitepaper
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="/pitch-deck.pdf" download className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4 font-semibold border-primary/30">
                  Pitch Deck
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 glass-card p-4 aspect-square max-w-[500px] mx-auto overflow-hidden hover:border-primary/30 transition-all duration-300">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Shield className="w-48 h-48 text-primary" />
                  </motion.div>
               </div>
               {/* Floating elements */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute top-10 left-10 glass p-4 rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
               >
                  <TrendingUp className="text-green-400 w-6 h-6" />
               </motion.div>
               <motion.div 
                 animate={{ y: [0, 20, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                 className="absolute bottom-10 right-10 glass p-4 rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
               >
                  <Cpu className="text-primary w-6 h-6" />
               </motion.div>
            </div>
            {/* Glow Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/30 to-secondary/20 blur-[120px] rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <StatsCard label="Total Users" value="84,291" icon={Users} trend="+12%" isPositive />
          <StatsCard label="Tasks Completed" value="1.2M+" icon={CheckCircle2} trend="+8%" isPositive />
          <StatsCard label="$EFX Distributed" value="15.8M" icon={Shield} />
          <StatsCard label="Active Businesses" value="450+" icon={Globe} trend="+5%" isPositive />
        </motion.div>
      </section>

      {/* How it Works */}
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">How it Works</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">Start earning in minutes with our streamlined onboarding process.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { step: "01", title: "Connect Wallet", desc: "Link your Web3 wallet to the EarnifyX protocol to establish your decentralized identity.", icon: Lock },
            { step: "02", title: "Complete Tasks", desc: "Choose from social, micro, or premium tasks verified in real-time by our advanced AI engine.", icon: Database },
            { step: "03", title: "Earn Rewards", desc: "Receive $EFX tokens instantly upon verification, which you can stake, trade, or spend.", icon: Zap },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-6 group"
            >
              <div className="w-20 h-20 rounded-3xl glass border border-white/10 flex items-center justify-center text-3xl font-black text-primary relative group-hover:border-primary/40 transition-all duration-300 shadow-lg shadow-primary/10 group-hover:shadow-primary/20">
                <item.icon className="absolute -top-4 -right-4 text-foreground/20 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                {item.step}
              </div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-foreground/60 leading-relaxed text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white/[0.02] border-y border-white/5 py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold leading-tight">
                AI-Powered Verification <br />
                <span className="neon-text">& Fraud Detection</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Automated Verification", desc: "Our AI engine validates task evidence in seconds, ensuring near-instant reward distribution." },
                  { title: "Bot Prevention", desc: "Advanced behavioral analysis identifies and filters out automated farming networks." },
                  { title: "Quality Assurance", desc: "Machine learning models evaluate user effort and accuracy to maintain marketplace integrity." },
                ].map((f, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg glass flex-shrink-0 flex items-center justify-center border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300">
                      <CheckCircle2 className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{f.title}</h4>
                      <p className="text-foreground/60 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="inline-block"
              >
                <Link href="/docs/ai-system" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all text-base">
                  Learn about our AI Engine
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
               <div className="glass-card p-8 border border-white/10 relative z-10 hover:border-white/20 transition-all duration-300">
                  <div className="space-y-4">
                    <motion.div 
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="h-4 w-1/3 bg-white/10 rounded-full" 
                    />
                    <div className="h-12 w-full bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20 flex items-center px-4">
                       <motion.div 
                         animate={{ scale: [1, 1.2, 1] }}
                         transition={{ duration: 2, repeat: Infinity }}
                         className="w-2 h-2 rounded-full bg-green-500 mr-3" 
                       />
                       <span className="text-xs font-bold text-primary tracking-widest uppercase">AI Engine Status: Active</span>
                    </div>
                    <div className="space-y-3">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: "100%" }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.8 }}
                         className="h-2 bg-white/5 rounded-full" 
                       />
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: "83%" }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.8, delay: 0.1 }}
                         className="h-2 bg-white/5 rounded-full" 
                       />
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: "67%" }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.8, delay: 0.2 }}
                         className="h-2 bg-white/5 rounded-full" 
                       />
                    </div>
                  </div>
               </div>
               <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Tasks */}
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4">Explore Tasks</h2>
            <p className="text-foreground/60 text-lg">The highest paying tasks in the marketplace right now.</p>
          </div>
          <Link href="/tasks" className="hidden sm:flex btn-secondary items-center gap-2 whitespace-nowrap">
            View All Tasks
            <ArrowRight size={18} />
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTasks.map((task, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <TaskCard {...task} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 lg:p-20 border border-primary/20 relative overflow-hidden text-center flex flex-col items-center gap-8 hover:border-primary/40 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 -z-10" />
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-black max-w-3xl leading-tight"
          >
            Ready to start your <br />
            <span className="neon-text">earning journey?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-foreground/60 max-w-2xl font-medium"
          >
            Join 80,000+ users worldwide and start earning $EFX for your time and skills today.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-12 py-4 font-semibold"
            >
              Get Started Now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-12 py-4 font-semibold"
            >
              Join Community
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

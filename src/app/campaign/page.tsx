"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wallet,
  Trophy,
  Users,
  Copy,
  ExternalLink,
  Activity,
  Target,
  ArrowUpRight,
  CheckCircle2,
  Share2,
  Gift,
  ShieldCheck,
  Zap,
  ChevronRight,
  Clock,
  X,
} from "lucide-react";
import Link from "next/link";

// Mock Data
const LEADERBOARD_DATA = [
  { rank: 1, wallet: "0x7A...3f12", points: 14250, referrals: 124 },
  { rank: 2, wallet: "0x1B...9a44", points: 12100, referrals: 98 },
  { rank: 3, wallet: "0x9C...2b88", points: 10500, referrals: 76 },
  { rank: 4, wallet: "0x4D...1c55", points: 9800, referrals: 65 },
  { rank: 5, wallet: "0xE2...8d99", points: 8400, referrals: 52 },
];

const LIVE_FEED = [
  "0xA3..F9 earned 12 EFX",
  "New wallet joined from X",
  "0x11..B2 completed Daily Check-in",
  "0x88..4A referred a user",
];

const TASKS = [
  { id: 1, title: "Follow X (Twitter)", reward: 10, completed: false, icon: <Share2 className="w-5 h-5 text-blue-400" /> },
  { id: 2, title: "Join Telegram Group", reward: 15, completed: false, icon: <Users className="w-5 h-5 text-purple-400" /> },
  { id: 3, title: "Daily Check-in", reward: 5, completed: true, icon: <Activity className="w-5 h-5 text-green-400" /> },
  { id: 4, title: "Invite & Earn", reward: 25, completed: false, icon: <Gift className="w-5 h-5 text-pink-400" /> },
];

export default function CampaignPage() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [feedIndex, setFeedIndex] = useState(0);
  const [showJoinModal, setShowJoinModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeedIndex((prev) => (prev + 1) % LIVE_FEED.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleConnect = () => setWalletConnected(true);

  return (
    <div className="min-h-screen bg-[#05050A] text-white overflow-hidden font-sans selection:bg-blue-500/30 relative">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[150px] rounded-full" />
        <div className="absolute top-[40%] left-[50%] w-[20%] h-[20%] bg-cyan-500/10 blur-[100px] rounded-full" />
      </div>



      <main className="relative z-10 pt-32 pb-24 space-y-32 max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Season 1 is LIVE</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Proof of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Grind</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-400 max-w-lg">
              Complete tasks. Earn $EFX. Climb the leaderboard. The ultimate viral earning protocol on Web3.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleConnect}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all flex items-center justify-center space-x-2"
              >
                <Wallet className="w-5 h-5" />
                <span>{walletConnected ? "Start Grinding" : "Connect Wallet"}</span>
              </button>
              <button 
                onClick={() => setShowJoinModal(true)}
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-bold text-lg flex items-center justify-center space-x-2"
              >
                <span>Join Campaign</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl font-bold text-white">8,432</div>
                <div className="text-sm text-gray-500">Wallets Joined</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">92k+</div>
                <div className="text-sm text-gray-500">Transactions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">$20k</div>
                <div className="text-sm text-gray-500">Reward Pool</div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-3xl rounded-3xl" />
            <div className="relative bg-[#0A0A12] border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold flex items-center space-x-2 text-lg">
                  <Activity className="w-5 h-5 text-blue-400" />
                  <span>Live Activity Feed</span>
                </h3>
                <div className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md">Real-time</div>
              </div>
              
              <div className="h-12 overflow-hidden relative border-b border-white/5 mb-6">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={feedIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute text-sm text-gray-300 flex items-center space-x-2"
                  >
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>{LIVE_FEED[feedIndex]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Top Grindrz</h4>
              <div className="space-y-3">
                {LEADERBOARD_DATA.slice(0, 3).map((user, i) => (
                  <div key={user.rank} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        i === 0 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 shadow-[0_0_10px_rgba(234,179,8,0.3)]' :
                        i === 1 ? 'bg-gray-300/20 text-gray-300 border border-gray-300/50' :
                        'bg-orange-400/20 text-orange-400 border border-orange-400/50'
                      }`}>
                        #{user.rank}
                      </div>
                      <span className="font-mono text-sm">{user.wallet}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-blue-400">{user.points} <span className="text-xs">EFX</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2. CAMPAIGN EXPLANATION */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How The Protocol Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full" />
              <Target className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">1. Tasks = Points</h3>
              <p className="text-gray-400 text-sm">Connect your social accounts and wallet to complete daily tasks and earn base points.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group hover:border-purple-500/50 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 blur-2xl rounded-full" />
              <Trophy className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">2. Points = Rank</h3>
              <p className="text-gray-400 text-sm">Accumulate points to climb the global leaderboard. Higher ranks mean larger airdrop allocations.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group hover:border-pink-500/50 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 blur-2xl rounded-full" />
              <Gift className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">3. Rank = Rewards</h3>
              <p className="text-gray-400 text-sm">At the end of Season 1, the $20,000 $EFX pool is distributed proportionally based on final ranking.</p>
            </div>
          </div>
        </section>

        {/* 3. TASK SYSTEM UI */}
        <section className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-3xl font-bold">Active Quests</h2>
            <p className="text-gray-400">
              Complete these tasks to stack up $EFX points instantly. Some tasks reset daily.
            </p>
            <div className="p-6 bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/20 rounded-2xl">
              <h4 className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-2">Your Progress</h4>
              <div className="text-3xl font-bold text-white mb-4">1,450 <span className="text-lg text-blue-400">PTS</span></div>
              <div className="w-full bg-black/50 rounded-full h-2 mb-2 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <div className="text-xs text-gray-400 flex justify-between">
                <span>Level 2</span>
                <span>2,000 to Level 3</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {TASKS.map(task => (
              <div key={task.id} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-black/30 rounded-xl border border-white/5">
                    {task.icon}
                  </div>
                  <div className="flex items-center space-x-1 text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-full text-sm">
                    <span>+{task.reward} EFX</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-4">{task.title}</h4>
                  <button 
                    disabled={!walletConnected || task.completed}
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all flex justify-center items-center space-x-2 ${
                      task.completed 
                        ? 'bg-green-500/20 text-green-400 cursor-not-allowed'
                        : !walletConnected
                          ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                    }`}
                  >
                    {task.completed ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Completed</span>
                      </>
                    ) : (
                      <span>{walletConnected ? 'Verify Task' : 'Connect Wallet First'}</span>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. LEADERBOARD & 5. REFERRALS */}
        <section className="grid lg:grid-cols-2 gap-12">
          {/* Leaderboard */}
          <div className="space-y-6">
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-3xl font-bold flex items-center space-x-3">
                <Trophy className="w-8 h-8 text-yellow-400" />
                <span>Global Rank</span>
              </h2>
              <Link href="#" className="text-blue-400 text-sm hover:underline flex items-center space-x-1">
                <span>View Full</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-[#0A0A12] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {walletConnected && (
                <div className="p-4 bg-blue-900/30 border-b border-blue-500/30 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl font-bold text-blue-400">#482</div>
                    <div>
                      <div className="font-mono text-sm font-bold">0x7A...3f12 (You)</div>
                      <div className="text-xs text-gray-400">1,450 Points</div>
                    </div>
                  </div>
                  <div className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30">
                    +120 today
                  </div>
                </div>
              )}
              <div className="divide-y divide-white/5">
                {LEADERBOARD_DATA.map((user, i) => (
                  <div key={user.rank} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors group">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        i === 0 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.4)]' :
                        i === 1 ? 'bg-gray-300/20 text-gray-300 border border-gray-300/50' :
                        i === 2 ? 'bg-orange-400/20 text-orange-400 border border-orange-400/50' :
                        'bg-white/5 text-gray-400'
                      }`}>
                        #{user.rank}
                      </div>
                      <div>
                        <div className="font-mono text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{user.wallet}</div>
                        <div className="text-xs text-gray-500 flex items-center space-x-1 mt-1">
                          <Users className="w-3 h-3" />
                          <span>{user.referrals} refs</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        {user.points.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">PTS</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Referral System */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center space-x-3">
              <Users className="w-8 h-8 text-pink-400" />
              <span>Viral Loop</span>
            </h2>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1A1025] to-[#0A0A12] border border-pink-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative z-10 space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Invite & Earn 10% Forever</h3>
                  <p className="text-gray-400 text-sm">
                    Get +25 points instantly when a friend joins, plus 10% of all points they earn in Season 1.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Total Invites</span>
                    <span className="font-bold text-white">12 Users</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Points from Referrals</span>
                    <span className="font-bold text-pink-400">+450 PTS</span>
                  </div>
                </div>

                {walletConnected ? (
                  <div className="space-y-3">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Invite Link</label>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 font-mono text-sm text-gray-300 truncate">
                        earnifyx.io/join?ref=0x7A...3f12
                      </div>
                      <button className="p-3 bg-pink-600 hover:bg-pink-500 text-white rounded-xl transition-all shadow-[0_0_15px_rgba(219,39,119,0.4)]">
                        <Copy className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 bg-black/40 border border-white/5 rounded-2xl text-center">
                    <LockIcon className="w-8 h-8 text-gray-500 mx-auto mb-3" />
                    <p className="text-sm text-gray-400 mb-4">Connect wallet to get your referral link</p>
                    <button onClick={handleConnect} className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-semibold transition-colors">
                      Connect Wallet
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 6. REWARD POOL */}
        <section className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 border border-white/10 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-2 bg-black/50 border border-white/10 px-4 py-2 rounded-full text-sm">
              <Clock className="w-4 h-4 text-purple-400" />
              <span>Season 1 ends in <strong className="text-white">14d 08h 45m</strong></span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                $20,000
              </span>
              {" "}Reward Pool
            </h2>
            
            <p className="text-gray-400 max-w-2xl mx-auto">
              The more points you accumulate, the bigger your slice of the pie. Top 100 guaranteed allocation.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="bg-black/40 border border-yellow-500/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(234,179,8,0.1)]">
                <div className="text-yellow-400 font-bold mb-2">1st Place</div>
                <div className="text-3xl font-black text-white">$3,000</div>
                <div className="text-sm text-gray-500 mt-1">in $EFX tokens</div>
              </div>
              <div className="bg-black/40 border border-gray-400/30 rounded-2xl p-6">
                <div className="text-gray-300 font-bold mb-2">2nd - 10th</div>
                <div className="text-3xl font-black text-white">$1,000</div>
                <div className="text-sm text-gray-500 mt-1">each in $EFX</div>
              </div>
              <div className="bg-black/40 border border-orange-400/30 rounded-2xl p-6">
                <div className="text-orange-400 font-bold mb-2">11th - 100th</div>
                <div className="text-3xl font-black text-white">$100</div>
                <div className="text-sm text-gray-500 mt-1">minimum allocation</div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. ON-CHAIN TRANSPARENCY & 8. LIVE STATS */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">100% On-Chain Transparency</h2>
            <p className="text-gray-400">
              No black boxes. Every task completion, point allocation, and referral is recorded and verifiable on-chain via our custom smart contracts.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <ShieldCheck className="w-6 h-6 text-green-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Immutable Records</h4>
                  <p className="text-sm text-gray-500">Your points cannot be altered by central authorities.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Zap className="w-6 h-6 text-blue-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Instant Settlement</h4>
                  <p className="text-sm text-gray-500">Rewards are distributed automatically via smart contract at season end.</p>
                </div>
              </li>
            </ul>
            <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors mt-4">
              <span>View Smart Contract on BscScan</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <Activity className="w-6 h-6 text-blue-400 mb-3" />
              <div className="text-2xl font-bold text-white">1.2s</div>
              <div className="text-sm text-gray-500">Avg Sync Time</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <Users className="w-6 h-6 text-purple-400 mb-3" />
              <div className="text-2xl font-bold text-white">1,402</div>
              <div className="text-sm text-gray-500">Active Now</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <Target className="w-6 h-6 text-pink-400 mb-3" />
              <div className="text-2xl font-bold text-white">284k</div>
              <div className="text-sm text-gray-500">Tasks Completed</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <Wallet className="w-6 h-6 text-green-400 mb-3" />
              <div className="text-2xl font-bold text-white">$14M</div>
              <div className="text-sm text-gray-500">Protocol TVL</div>
            </div>
          </div>
        </section>

        {/* 10. FINAL CTA SECTION */}
        <section className="text-center py-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-5xl md:text-6xl font-black">Start Grinding Now</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join thousands of others earning $EFX daily. The earlier you start, the higher you rank.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button 
                onClick={handleConnect}
                className="px-10 py-5 rounded-2xl bg-white text-black font-black text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 transition-all flex items-center justify-center space-x-3"
              >
                <Wallet className="w-6 h-6" />
                <span>{walletConnected ? "Go to Dashboard" : "Connect Wallet"}</span>
              </button>
            </div>
            <p className="text-sm text-gray-500 flex items-center justify-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>It takes 30 seconds to start earning.</span>
            </p>
          </div>
        </section>

      </main>
      
      {/* Mobile Sticky CTA */}
      {!walletConnected && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#05050A] via-[#05050A] to-transparent z-50 md:hidden">
          <button 
            onClick={handleConnect}
            className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center space-x-2"
          >
            <Wallet className="w-5 h-5" />
            <span>Connect Wallet</span>
          </button>
        </div>
      )}

      {/* Join Campaign Modal */}
      <AnimatePresence>
        {showJoinModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#0A0A12] border border-white/10 rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
              
              <button 
                onClick={() => setShowJoinModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Invite & Earn</h3>
                <p className="text-gray-400 text-sm">
                  Join the campaign and get a unique referral link. Share it with friends to earn 25 $EFX instantly + 10% of their earnings forever.
                </p>
              </div>

              {walletConnected ? (
                <div className="space-y-4">
                  <div className="p-4 bg-black/50 border border-white/10 rounded-xl relative">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">Your Invite Link</label>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 font-mono text-sm text-gray-300 truncate">
                        earnifyx.io/join?ref=0x7A...3f12
                      </div>
                      <button className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowJoinModal(false)}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
                  >
                    Start Grinding
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-6 bg-black/40 border border-white/5 rounded-2xl text-center">
                    <p className="text-sm text-gray-400 mb-4">Connect your wallet first to get your referral link and join the campaign.</p>
                    <button 
                      onClick={() => {
                        handleConnect();
                        setShowJoinModal(false);
                      }} 
                      className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-blue-500 transition-colors"
                    >
                      Connect Wallet
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Lock icon helper
function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

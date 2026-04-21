"use client";

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Users, CheckSquare, Rocket, DollarSign } from 'lucide-react';

export default function AdminDashboard() {
  const { stats, rewards, tasks, campaigns } = useAdmin();

  const statCards = [
    { title: 'Total Users', value: stats.totalUsers.toLocaleString(), icon: Users, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { title: 'Total Tasks', value: stats.totalTasks.toLocaleString(), icon: CheckSquare, color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { title: 'Active Campaigns', value: stats.activeCampaigns.toLocaleString(), icon: Rocket, color: 'text-pink-400', bg: 'bg-pink-400/10' },
    { title: 'Rewards Distributed', value: `$${stats.totalDistributed.toLocaleString()}`, icon: DollarSign, color: 'text-green-400', bg: 'bg-green-400/10' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-[#2a364a] bg-[#0f1523]/80 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${card.bg}`}>
                  <Icon size={24} className={card.color} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">{card.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{card.value}</p>
                </div>
              </div>
              {/* Decorative gradient blob */}
              <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl opacity-20 ${card.bg.replace('/10', '')}`} />
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="col-span-1 lg:col-span-2 rounded-2xl border border-[#2a364a] bg-[#0f1523]/80 backdrop-blur-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-[#2a364a]">
            <h2 className="text-lg font-semibold text-white">Recent Rewards</h2>
          </div>
          <div className="flex-1 p-6">
            <div className="space-y-4">
              {rewards.slice(0, 5).map((reward) => (
                <div key={reward.id} className="flex items-center justify-between p-4 rounded-xl border border-[#1a2333] bg-[#141b2d]/50">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                      <DollarSign size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">User <span className="text-gray-400">({reward.userId})</span></p>
                      <p className="text-xs text-gray-400 mt-1">Reward Type: {reward.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-green-400">+{reward.amount} $EFX</p>
                    <p className="text-xs text-gray-500 mt-1">{new Date(reward.date).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats Overview */}
        <div className="col-span-1 rounded-2xl border border-[#2a364a] bg-[#0f1523]/80 backdrop-blur-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-[#2a364a]">
            <h2 className="text-lg font-semibold text-white">Platform Health</h2>
          </div>
          <div className="flex-1 p-6 space-y-6">
            
            {/* Task Status */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Published Tasks</span>
                <span className="text-white font-medium">{tasks.filter(t => t.status === 'Published').length} / {tasks.length}</span>
              </div>
              <div className="w-full bg-[#1a2333] rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(tasks.filter(t => t.status === 'Published').length / (tasks.length || 1)) * 100}%` }}></div>
              </div>
            </div>

            {/* Campaign Status */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Active Campaigns</span>
                <span className="text-white font-medium">{campaigns.filter(c => c.status === 'Active').length} / {campaigns.length}</span>
              </div>
              <div className="w-full bg-[#1a2333] rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${(campaigns.filter(c => c.status === 'Active').length / (campaigns.length || 1)) * 100}%` }}></div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1a2333]">
              <p className="text-xs text-gray-500 text-center">System is running smoothly. All services are operational.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import Table from '@/components/admin/ui/Table';
import Button from '@/components/admin/ui/Button';
import Modal from '@/components/admin/ui/Modal';
import { DollarSign, Send } from 'lucide-react';
import { RewardTransaction } from '@/lib/admin-mock-data';

export default function RewardsManager() {
  const { rewards, distributeReward, stats, users } = useAdmin();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    userId: '',
    amount: 0,
    type: 'Manual' as const,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    distributeReward(formData.userId, formData.amount, formData.type);
    setIsModalOpen(false);
    setFormData({ userId: '', amount: 0, type: 'Manual' });
  };

  const columns = [
    {
      header: 'Transaction ID',
      accessor: (row: RewardTransaction) => (
        <span className="font-mono text-gray-400 text-xs">{row.id}</span>
      ),
    },
    {
      header: 'User ID',
      accessor: (row: RewardTransaction) => (
        <span className="font-mono text-blue-400 text-sm">{row.userId}</span>
      ),
    },
    {
      header: 'Amount',
      accessor: (row: RewardTransaction) => (
        <span className="text-green-400 font-medium">+{row.amount} $EFX</span>
      ),
    },
    {
      header: 'Type',
      accessor: (row: RewardTransaction) => (
        <span className={`inline-block px-2 py-1 rounded text-xs border ${
          row.type === 'Task' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
          row.type === 'Referral' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
          row.type === 'Bonus' ? 'bg-pink-500/10 text-pink-400 border-pink-500/20' :
          'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
        }`}>
          {row.type}
        </span>
      ),
    },
    {
      header: 'Date',
      accessor: (row: RewardTransaction) => (
        <span className="text-gray-400 text-sm">{new Date(row.date).toLocaleString()}</span>
      ),
    },
    {
      header: 'Status',
      accessor: (row: RewardTransaction) => (
        <span className={`text-xs font-medium ${row.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>
          {row.status}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Rewards Control</h1>
          <p className="text-gray-400 text-sm mt-1">Monitor and manually distribute $EFX rewards.</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="gap-2">
          <Send size={18} />
          Send Reward
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
              <DollarSign size={24} className="text-blue-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium">Total Distributed</p>
              <h2 className="text-3xl font-bold text-white mt-1">{stats.totalDistributed.toLocaleString()}</h2>
            </div>
          </div>
          <p className="text-xs text-blue-300">Total $EFX tokens distributed across all campaigns, tasks, and manual sends.</p>
        </div>
        
        <div className="md:col-span-2">
          <Table
            data={rewards}
            columns={columns}
            keyExtractor={(row) => row.id}
          />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Distribute Manual Reward"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Select User</label>
            <select
              required
              value={formData.userId}
              onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
              className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg px-4 py-2.5 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
            >
              <option value="" disabled>Select a user...</option>
              {users.map(u => (
                <option key={u.id} value={u.id}>{u.walletAddress} (ID: {u.id})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Amount ($EFX)</label>
            <input
              required
              type="number"
              min="1"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
              className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg px-4 py-2.5 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
            />
          </div>

          <div className="pt-4 flex justify-end gap-3 mt-6 border-t border-[#2a364a]">
            <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">
              Send Reward
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

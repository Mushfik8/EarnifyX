"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import Table from '@/components/admin/ui/Table';
import { Search, Ban, CheckCircle, Trash2 } from 'lucide-react';
import { User } from '@/lib/admin-mock-data';

export default function UsersManager() {
  const { users, updateUserStatus, deleteUser } = useAdmin();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user => 
    user.walletAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      header: 'User Info',
      accessor: (row: User) => (
        <div>
          <p className="font-medium text-white font-mono">{row.walletAddress}</p>
          <p className="text-xs text-gray-500">ID: {row.id}</p>
        </div>
      ),
    },
    {
      header: 'Earnings ($EFX)',
      accessor: (row: User) => (
        <span className="text-green-400 font-medium">{row.earnings.toLocaleString()}</span>
      ),
    },
    {
      header: 'Referrals',
      accessor: (row: User) => (
        <span className="text-gray-300">{row.referrals}</span>
      ),
    },
    {
      header: 'Join Date',
      accessor: (row: User) => (
        <span className="text-gray-400 text-sm">{new Date(row.joinDate).toLocaleDateString()}</span>
      ),
    },
    {
      header: 'Status',
      accessor: (row: User) => (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
          row.status === 'Active' 
            ? 'bg-green-500/10 text-green-400 border-green-500/20' 
            : 'bg-red-500/10 text-red-400 border-red-500/20'
        }`}>
          {row.status === 'Active' ? <CheckCircle size={12} /> : <Ban size={12} />}
          {row.status}
        </span>
      ),
    },
    {
      header: 'Actions',
      accessor: (row: User) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateUserStatus(row.id, row.status === 'Active' ? 'Banned' : 'Active')}
            className={`p-1.5 rounded transition-colors ${
              row.status === 'Active' 
                ? 'text-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-400' 
                : 'text-green-500 hover:bg-green-500/10 hover:text-green-400'
            }`}
            title={row.status === 'Active' ? "Ban User" : "Activate User"}
          >
            {row.status === 'Active' ? <Ban size={16} /> : <CheckCircle size={16} />}
          </button>
          <button
            onClick={() => deleteUser(row.id)}
            className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors"
            title="Delete User"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">User Directory</h1>
          <p className="text-gray-400 text-sm mt-1">Manage users and track their platform engagement.</p>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-[#0f1523]/80 p-4 rounded-xl border border-[#2a364a] backdrop-blur-sm">
        <div className="relative flex-1 max-w-md">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search by wallet address or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg pl-10 pr-4 py-2 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all text-sm"
          />
        </div>
      </div>

      <Table
        data={filteredUsers}
        columns={columns}
        keyExtractor={(row) => row.id}
        emptyMessage="No users found matching your search."
      />
    </div>
  );
}

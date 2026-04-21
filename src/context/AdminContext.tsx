"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import {
  Task, Campaign, User, RewardTransaction, ContentSection,
  initialTasks, initialCampaigns, initialUsers, initialRewards, initialStats, initialContent
} from '@/lib/admin-mock-data';

interface AdminContextProps {
  tasks: Task[];
  campaigns: Campaign[];
  users: User[];
  rewards: RewardTransaction[];
  content: ContentSection[];
  stats: typeof initialStats;
  
  // Tasks
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  updateTask: (id: string, task: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  
  // Campaigns
  addCampaign: (campaign: Omit<Campaign, 'id' | 'participants'>) => void;
  updateCampaign: (id: string, campaign: Partial<Campaign>) => void;
  deleteCampaign: (id: string) => void;
  
  // Users
  updateUserStatus: (id: string, status: 'Active' | 'Banned') => void;
  deleteUser: (id: string) => void;
  
  // Rewards
  distributeReward: (userId: string, amount: number, type: 'Task' | 'Referral' | 'Bonus' | 'Manual') => void;

  // Content
  updateContent: (id: string, newContent: string) => void;
}

const AdminContext = createContext<AdminContextProps | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [campaigns, setCampaigns] = useState<Campaign[]>(initialCampaigns);
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [rewards, setRewards] = useState<RewardTransaction[]>(initialRewards);
  const [content, setContent] = useState<ContentSection[]>(initialContent);
  const [stats, setStats] = useState(initialStats);

  // --- Task Methods ---
  const addTask = (taskData: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...taskData,
      id: `t-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [...prev, newTask]);
    setStats((prev) => ({ ...prev, totalTasks: prev.totalTasks + 1 }));
  };

  const updateTask = (id: string, updatedData: Partial<Task>) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, ...updatedData } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    setStats((prev) => ({ ...prev, totalTasks: prev.totalTasks - 1 }));
  };

  // --- Campaign Methods ---
  const addCampaign = (campaignData: Omit<Campaign, 'id' | 'participants'>) => {
    const newCampaign: Campaign = {
      ...campaignData,
      id: `c-${Date.now()}`,
      participants: 0,
    };
    setCampaigns((prev) => [...prev, newCampaign]);
    if (newCampaign.status === 'Active') {
      setStats((prev) => ({ ...prev, activeCampaigns: prev.activeCampaigns + 1 }));
    }
  };

  const updateCampaign = (id: string, updatedData: Partial<Campaign>) => {
    setCampaigns((prev) => {
      const newCampaigns = prev.map((c) => (c.id === id ? { ...c, ...updatedData } : c));
      const activeCount = newCampaigns.filter(c => c.status === 'Active').length;
      setStats(s => ({ ...s, activeCampaigns: activeCount }));
      return newCampaigns;
    });
  };

  const deleteCampaign = (id: string) => {
    setCampaigns((prev) => {
      const newCampaigns = prev.filter((c) => c.id !== id);
      const activeCount = newCampaigns.filter(c => c.status === 'Active').length;
      setStats(s => ({ ...s, activeCampaigns: activeCount }));
      return newCampaigns;
    });
  };

  // --- User Methods ---
  const updateUserStatus = (id: string, status: 'Active' | 'Banned') => {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, status } : u)));
  };

  const deleteUser = (id: string) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
    setStats((prev) => ({ ...prev, totalUsers: prev.totalUsers - 1 }));
  };

  // --- Reward Methods ---
  const distributeReward = (userId: string, amount: number, type: 'Task' | 'Referral' | 'Bonus' | 'Manual') => {
    const newReward: RewardTransaction = {
      id: `r-${Date.now()}`,
      userId,
      amount,
      type,
      date: new Date().toISOString(),
      status: 'Completed',
    };
    setRewards((prev) => [newReward, ...prev]);
    
    // Update user earnings
    setUsers((prev) => prev.map((u) => (u.id === userId ? { ...u, earnings: u.earnings + amount } : u)));
    
    // Update total distributed
    setStats((prev) => ({ ...prev, totalDistributed: prev.totalDistributed + amount }));
  };

  // --- Content Methods ---
  const updateContent = (id: string, newContent: string) => {
    setContent((prev) => prev.map((c) => (c.id === id ? { ...c, content: newContent, lastUpdated: new Date().toISOString() } : c)));
  };

  return (
    <AdminContext.Provider
      value={{
        tasks, campaigns, users, rewards, content, stats,
        addTask, updateTask, deleteTask,
        addCampaign, updateCampaign, deleteCampaign,
        updateUserStatus, deleteUser,
        distributeReward, updateContent
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

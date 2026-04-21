"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { Menu, Search, Bell } from 'lucide-react';

const routeNames: Record<string, string> = {
  '/admin': 'Dashboard Overview',
  '/admin/tasks': 'Tasks Manager',
  '/admin/campaigns': 'Campaign Management',
  '/admin/users': 'User Directory',
  '/admin/rewards': 'Rewards Control',
  '/admin/content': 'Content Manager',
  '/admin/settings': 'Platform Settings',
};

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const pathname = usePathname();
  const pageTitle = routeNames[pathname] || 'Admin Panel';

  return (
    <header className="h-16 border-b border-[#1a2333] bg-[#0B0F19]/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-4 lg:px-8">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 text-gray-400 hover:text-white rounded-lg hover:bg-[#1a2333] transition-colors"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-lg lg:text-xl font-semibold text-white">{pageTitle}</h1>
      </div>

      <div className="flex items-center gap-4 lg:gap-6">
        <div className="hidden md:flex items-center relative">
          <Search size={18} className="absolute left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#1a2333] border border-[#2a364a] text-white text-sm rounded-full pl-10 pr-4 py-2 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all w-64"
          />
        </div>
        
        <button className="relative p-2 text-gray-400 hover:text-white rounded-full hover:bg-[#1a2333] transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0B0F19]"></span>
        </button>
        
        <div className="flex items-center gap-3 border-l border-[#1a2333] pl-4 lg:pl-6">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium text-white leading-tight">Admin User</p>
            <p className="text-xs text-blue-400">Superadmin</p>
          </div>
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px]">
            <div className="h-full w-full rounded-full bg-[#0B0F19] flex items-center justify-center">
              <span className="text-xs font-bold text-white">AU</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

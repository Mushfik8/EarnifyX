"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  CheckSquare,
  Rocket,
  Users,
  Gift,
  FileText,
  Settings,
  LogOut,
  X
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Tasks Manager', path: '/admin/tasks', icon: CheckSquare },
  { name: 'Campaigns', path: '/admin/campaigns', icon: Rocket },
  { name: 'Users', path: '/admin/users', icon: Users },
  { name: 'Rewards', path: '/admin/rewards', icon: Gift },
  { name: 'Content Manager', path: '/admin/content', icon: FileText },
  { name: 'Settings', path: '/admin/settings', icon: Settings },
];

export default function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-[#1a2333] bg-[#0B0F19] lg:static lg:translate-x-0 lg:animate-none"
      >
        <div className="flex h-16 items-center justify-between px-6 border-b border-[#1a2333]">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Admin
            </span>
          </Link>
          <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;

            return (
              <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)}>
                <div
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative ${
                    isActive
                      ? "text-white bg-blue-500/10 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                      : "text-gray-400 hover:text-white hover:bg-[#1a2333]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-500/10 rounded-lg border border-blue-500/20"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <Icon size={20} className={`relative z-10 ${isActive ? 'text-blue-400' : 'group-hover:text-blue-400 transition-colors'}`} />
                  <span className="font-medium relative z-10">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[#1a2333]">
          <button className="flex items-center gap-3 px-3 py-2.5 w-full text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </motion.aside>
    </>
  );
}

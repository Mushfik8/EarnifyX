"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import Topbar from '@/components/admin/Topbar';
import { AdminProvider } from '@/context/AdminContext';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <AdminProvider>
      <div className="flex h-screen bg-[#0B0F19] text-gray-200 overflow-hidden font-sans">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <Topbar onMenuClick={() => setIsSidebarOpen(true)} />
          
          <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-gradient-to-br from-[#0B0F19] to-[#121928]">
            <div className="mx-auto max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </AdminProvider>
  );
}

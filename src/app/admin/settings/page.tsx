"use client";

import React, { useState } from 'react';
import Button from '@/components/admin/ui/Button';
import { Save, Shield, Globe, BellRing } from 'lucide-react';

export default function SettingsManager() {
  const [activeTab, setActiveTab] = useState<'general' | 'security' | 'notifications'>('general');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Platform Settings</h1>
          <p className="text-gray-400 text-sm mt-1">Configure global platform behavior and security.</p>
        </div>
        <Button onClick={handleSave} isLoading={isSaving} className="gap-2">
          <Save size={18} />
          Save Configurations
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Settings Sidebar */}
        <div className="w-full lg:w-64 space-y-2">
          <button
            onClick={() => setActiveTab('general')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
              activeTab === 'general'
                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                : 'text-gray-400 hover:text-white hover:bg-[#1a2333]'
            }`}
          >
            <Globe size={18} />
            General Settings
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
              activeTab === 'security'
                ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                : 'text-gray-400 hover:text-white hover:bg-[#1a2333]'
            }`}
          >
            <Shield size={18} />
            Security & Auth
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
              activeTab === 'notifications'
                ? 'bg-pink-500/10 text-pink-400 border border-pink-500/20'
                : 'text-gray-400 hover:text-white hover:bg-[#1a2333]'
            }`}
          >
            <BellRing size={18} />
            Notifications
          </button>
        </div>

        {/* Settings Content */}
        <div className="flex-1 bg-[#0f1523]/80 p-6 rounded-2xl border border-[#2a364a] backdrop-blur-sm">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-white border-b border-[#2a364a] pb-4">General Configuration</h2>
              
              <div className="space-y-4 max-w-2xl">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Platform Name</label>
                  <input
                    type="text"
                    defaultValue="Earnifyx"
                    className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg px-4 py-2.5 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Contact Email</label>
                  <input
                    type="email"
                    defaultValue="support@earnifyx.com"
                    className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg px-4 py-2.5 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Default Token</label>
                  <select
                    className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg px-4 py-2.5 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  >
                    <option value="EFX">$EFX (Earnifyx Token)</option>
                    <option value="USDT">USDT</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-white border-b border-[#2a364a] pb-4">Security Settings</h2>
              
              <div className="space-y-6 max-w-2xl">
                <div className="flex items-center justify-between p-4 bg-[#1a2333] rounded-xl border border-[#2a364a]">
                  <div>
                    <h3 className="font-medium text-white">Maintenance Mode</h3>
                    <p className="text-sm text-gray-400 mt-1">Prevent users from accessing the dashboard.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#1a2333] rounded-xl border border-[#2a364a]">
                  <div>
                    <h3 className="font-medium text-white">Require KYC</h3>
                    <p className="text-sm text-gray-400 mt-1">Force KYC verification before withdrawal.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-white border-b border-[#2a364a] pb-4">Admin Notifications</h2>
              
              <div className="space-y-4 max-w-2xl">
                {['New user registration', 'Reward claim request', 'Task completion threshold met', 'System error alerts'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked id={`notif-${i}`} className="w-4 h-4 bg-[#1a2333] border-[#2a364a] rounded focus:ring-blue-500 focus:ring-1" />
                    <label htmlFor={`notif-${i}`} className="text-sm text-gray-300 select-none cursor-pointer">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

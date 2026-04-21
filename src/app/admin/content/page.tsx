"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import Button from '@/components/admin/ui/Button';
import { Save, Check } from 'lucide-react';

export default function ContentManager() {
  const { content, updateContent } = useAdmin();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [savedStatus, setSavedStatus] = useState<string | null>(null);

  const handleEdit = (id: string, currentValue: string) => {
    setEditingId(id);
    setEditValue(currentValue);
  };

  const handleSave = (id: string) => {
    updateContent(id, editValue);
    setEditingId(null);
    setSavedStatus(id);
    setTimeout(() => setSavedStatus(null), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Content Manager</h1>
          <p className="text-gray-400 text-sm mt-1">Manage static text and homepage content.</p>
        </div>
      </div>

      <div className="space-y-4">
        {content.map((section) => (
          <div key={section.id} className="bg-[#0f1523]/80 p-6 rounded-xl border border-[#2a364a] backdrop-blur-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium text-white">{section.title}</h3>
                <p className="text-xs text-gray-500 mt-1">Last updated: {new Date(section.lastUpdated).toLocaleString()}</p>
              </div>
              {savedStatus === section.id && (
                <span className="flex items-center gap-1.5 text-sm text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                  <Check size={14} />
                  Saved
                </span>
              )}
            </div>

            {editingId === section.id ? (
              <div className="space-y-4">
                <textarea
                  rows={4}
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="w-full bg-[#1a2333] border border-blue-500/50 rounded-lg px-4 py-3 text-white outline-none focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                />
                <div className="flex justify-end gap-3">
                  <Button variant="ghost" onClick={() => setEditingId(null)}>
                    Cancel
                  </Button>
                  <Button className="gap-2" onClick={() => handleSave(section.id)}>
                    <Save size={16} />
                    Save Changes
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#1a2333] border border-[#2a364a]">
                  <p className="text-gray-300 whitespace-pre-wrap">{section.content}</p>
                </div>
                <div className="flex justify-end">
                  <Button variant="secondary" onClick={() => handleEdit(section.id, section.content)}>
                    Edit Content
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

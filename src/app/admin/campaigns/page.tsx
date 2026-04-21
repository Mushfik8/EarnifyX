"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import Table from '@/components/admin/ui/Table';
import Button from '@/components/admin/ui/Button';
import Modal from '@/components/admin/ui/Modal';
import { Plus, Edit2, Trash2, PauseCircle, PlayCircle, Users } from 'lucide-react';
import { Campaign } from '@/lib/admin-mock-data';

export default function CampaignsManager() {
  const { campaigns, addCampaign, updateCampaign, deleteCampaign } = useAdmin();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState<Campaign | null>(null);
  
  const [activeTab, setActiveTab] = useState<'ReferAndEarn' | 'TaskCampaign'>('ReferAndEarn');

  const [formData, setFormData] = useState<Partial<Campaign>>({
    name: '',
    type: 'ReferAndEarn',
    rewardPerReferral: 0,
    maxReferrals: 0,
    bonusReward: 0,
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    status: 'Draft',
  });

  const handleOpenModal = (campaign?: Campaign) => {
    if (campaign) {
      setEditingCampaign(campaign);
      // Format dates for input type="date"
      const formattedData = {
        ...campaign,
        startDate: campaign.startDate.split('T')[0],
        endDate: campaign.endDate.split('T')[0],
      };
      setFormData(formattedData);
    } else {
      setEditingCampaign(null);
      setFormData({
        name: '',
        type: activeTab,
        rewardPerReferral: activeTab === 'ReferAndEarn' ? 100 : undefined,
        maxReferrals: activeTab === 'ReferAndEarn' ? 50 : undefined,
        bonusReward: activeTab === 'TaskCampaign' ? 200 : undefined,
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        status: 'Draft',
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCampaign(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      startDate: new Date(formData.startDate as string).toISOString(),
      endDate: new Date(formData.endDate as string).toISOString(),
    };
    
    if (editingCampaign) {
      updateCampaign(editingCampaign.id, payload);
    } else {
      addCampaign(payload as Omit<Campaign, 'id' | 'participants'>);
    }
    handleCloseModal();
  };

  const toggleStatus = (campaign: Campaign) => {
    const newStatus = campaign.status === 'Active' ? 'Paused' : 'Active';
    updateCampaign(campaign.id, { status: newStatus });
  };

  const filteredCampaigns = campaigns.filter(c => c.type === activeTab);

  const columns = [
    {
      header: 'Campaign Name',
      accessor: (row: Campaign) => (
        <div>
          <p className="font-medium text-white">{row.name}</p>
          <p className="text-xs text-gray-500">
            {new Date(row.startDate).toLocaleDateString()} - {new Date(row.endDate).toLocaleDateString()}
          </p>
        </div>
      ),
    },
    {
      header: 'Reward Details',
      accessor: (row: Campaign) => {
        if (row.type === 'ReferAndEarn') {
          return (
            <div>
              <p className="text-sm text-green-400 font-medium">{row.rewardPerReferral} $EFX / ref</p>
              <p className="text-xs text-gray-500">Max: {row.maxReferrals}</p>
            </div>
          );
        }
        return (
          <div>
            <p className="text-sm text-green-400 font-medium">{row.bonusReward} $EFX Bonus</p>
            <p className="text-xs text-gray-500">Task bundle</p>
          </div>
        );
      },
    },
    {
      header: 'Participants',
      accessor: (row: Campaign) => (
        <div className="flex items-center gap-1.5 text-blue-400">
          <Users size={16} />
          <span className="font-medium">{row.participants.toLocaleString()}</span>
        </div>
      ),
    },
    {
      header: 'Status',
      accessor: (row: Campaign) => (
        <button
          onClick={() => toggleStatus(row)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${
            row.status === 'Active'
              ? 'bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20'
              : row.status === 'Paused'
              ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:bg-yellow-500/20'
              : 'bg-gray-500/10 text-gray-400 border-gray-500/20 hover:bg-gray-500/20'
          }`}
        >
          {row.status === 'Active' ? <PlayCircle size={14} /> : row.status === 'Paused' ? <PauseCircle size={14} /> : <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-400"></div>}
          {row.status}
        </button>
      ),
    },
    {
      header: 'Actions',
      accessor: (row: Campaign) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleOpenModal(row)}
            className="p-1.5 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded transition-colors"
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={() => deleteCampaign(row.id)}
            className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors"
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
          <h1 className="text-2xl font-bold text-white">Campaign System</h1>
          <p className="text-gray-400 text-sm mt-1">Manage Refer & Earn and Task group campaigns.</p>
        </div>
        <Button onClick={() => handleOpenModal()} className="gap-2">
          <Plus size={18} />
          Create Campaign
        </Button>
      </div>

      <div className="flex gap-4 border-b border-[#2a364a] pb-px">
        <button
          onClick={() => setActiveTab('ReferAndEarn')}
          className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
            activeTab === 'ReferAndEarn' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          Refer & Earn
          {activeTab === 'ReferAndEarn' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('TaskCampaign')}
          className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
            activeTab === 'TaskCampaign' ? 'text-purple-400' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          Task Campaigns
          {activeTab === 'TaskCampaign' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
          )}
        </button>
      </div>

      <Table
        data={filteredCampaigns}
        columns={columns}
        keyExtractor={(row) => row.id}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingCampaign ? 'Edit Campaign' : 'Create Campaign'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Campaign Name</label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg px-4 py-2.5 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
            />
          </div>

          {!editingCampaign && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Campaign Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as Campaign['type'] })}
                className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg px-4 py-2.5 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
              >
                <option value="ReferAndEarn">Refer & Earn</option>
                <option value="TaskCampaign">Task Campaign</option>
              </select>
            </div>
          )}

          {formData.type === 'ReferAndEarn' ? (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Reward per Referral</label>
                <input
                  required
                  type="number"
                  min="0"
                  value={formData.rewardPerReferral}
                  onChange={(e) => setFormData({ ...formData, rewardPerReferral: Number(e.target.value) })}
                  className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg px-4 py-2.5 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Max Referrals</label>
                <input
                  required
                  type="number"
                  min="0"
                  value={formData.maxReferrals}
                  onChange={(e) => setFormData({ ...formData, maxReferrals: Number(e.target.value) })}
                  className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg px-4 py-2.5 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Bonus Reward ($EFX)</label>
              <input
                required
                type="number"
                min="0"
                value={formData.bonusReward}
                onChange={(e) => setFormData({ ...formData, bonusReward: Number(e.target.value) })}
                className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg px-4 py-2.5 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Start Date</label>
              <input
                required
                type="date"
                value={formData.startDate as string}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg px-4 py-2.5 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">End Date</label>
              <input
                required
                type="date"
                value={formData.endDate as string}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg px-4 py-2.5 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as Campaign['status'] })}
              className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg px-4 py-2.5 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
            >
              <option value="Draft">Draft</option>
              <option value="Active">Active</option>
              <option value="Paused">Paused</option>
            </select>
          </div>

          <div className="pt-4 flex justify-end gap-3 mt-6 border-t border-[#2a364a]">
            <Button type="button" variant="ghost" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button type="submit">
              {editingCampaign ? 'Save Changes' : 'Create Campaign'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

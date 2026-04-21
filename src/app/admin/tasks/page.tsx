"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import Table from '@/components/admin/ui/Table';
import Button from '@/components/admin/ui/Button';
import Modal from '@/components/admin/ui/Modal';
import { Plus, Edit2, Trash2, CheckCircle, XCircle } from 'lucide-react';
import { Task } from '@/lib/admin-mock-data';

export default function TasksManager() {
  const { tasks, addTask, updateTask, deleteTask } = useAdmin();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const [formData, setFormData] = useState<Partial<Task>>({
    title: '',
    description: '',
    reward: 0,
    category: 'Social',
    difficulty: 'Easy',
    status: 'Draft',
  });

  const handleOpenModal = (task?: Task) => {
    if (task) {
      setEditingTask(task);
      setFormData(task);
    } else {
      setEditingTask(null);
      setFormData({
        title: '',
        description: '',
        reward: 0,
        category: 'Social',
        difficulty: 'Easy',
        status: 'Draft',
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTask) {
      updateTask(editingTask.id, formData);
    } else {
      addTask(formData as Omit<Task, 'id' | 'createdAt'>);
    }
    handleCloseModal();
  };

  const toggleStatus = (task: Task) => {
    updateTask(task.id, { status: task.status === 'Published' ? 'Draft' : 'Published' });
  };

  const columns = [
    {
      header: 'Task Title',
      accessor: (row: Task) => (
        <div>
          <p className="font-medium text-white">{row.title}</p>
          <p className="text-xs text-gray-500 max-w-xs truncate">{row.description}</p>
        </div>
      ),
    },
    {
      header: 'Reward',
      accessor: (row: Task) => (
        <span className="text-green-400 font-semibold">{row.reward} $EFX</span>
      ),
    },
    {
      header: 'Category / Diff',
      accessor: (row: Task) => (
        <div>
          <span className="inline-block px-2 py-1 rounded text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 mr-2">
            {row.category}
          </span>
          <span className={`inline-block px-2 py-1 rounded text-xs border ${
            row.difficulty === 'Easy' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
            row.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
            'bg-red-500/10 text-red-400 border-red-500/20'
          }`}>
            {row.difficulty}
          </span>
        </div>
      ),
    },
    {
      header: 'Status',
      accessor: (row: Task) => (
        <button
          onClick={() => toggleStatus(row)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${
            row.status === 'Published'
              ? 'bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20'
              : 'bg-gray-500/10 text-gray-400 border-gray-500/20 hover:bg-gray-500/20'
          }`}
        >
          {row.status === 'Published' ? <CheckCircle size={14} /> : <XCircle size={14} />}
          {row.status}
        </button>
      ),
    },
    {
      header: 'Actions',
      accessor: (row: Task) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleOpenModal(row)}
            className="p-1.5 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded transition-colors"
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={() => deleteTask(row.id)}
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
          <h1 className="text-2xl font-bold text-white">Tasks Manager</h1>
          <p className="text-gray-400 text-sm mt-1">Create and manage earning tasks for users.</p>
        </div>
        <Button onClick={() => handleOpenModal()} className="gap-2">
          <Plus size={18} />
          Create Task
        </Button>
      </div>

      <Table
        data={tasks}
        columns={columns}
        keyExtractor={(row) => row.id}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingTask ? 'Edit Task' : 'Create New Task'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Task Title</label>
            <input
              required
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg px-4 py-2.5 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
              placeholder="e.g. Follow us on Twitter"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg px-4 py-2.5 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
              placeholder="Task details and instructions..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Reward ($EFX)</label>
              <input
                required
                type="number"
                min="0"
                value={formData.reward}
                onChange={(e) => setFormData({ ...formData, reward: Number(e.target.value) })}
                className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg px-4 py-2.5 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as Task['category'] })}
                className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg px-4 py-2.5 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
              >
                <option value="Social">Social</option>
                <option value="Micro">Micro</option>
                <option value="Premium">Premium</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Difficulty</label>
              <select
                value={formData.difficulty}
                onChange={(e) => setFormData({ ...formData, difficulty: e.target.value as Task['difficulty'] })}
                className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg px-4 py-2.5 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as Task['status'] })}
                className="w-full bg-[#1a2333] border border-[#2a364a] rounded-lg px-4 py-2.5 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-3 mt-6 border-t border-[#2a364a]">
            <Button type="button" variant="ghost" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button type="submit">
              {editingTask ? 'Save Changes' : 'Create Task'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

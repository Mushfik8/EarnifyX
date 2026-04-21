export interface Task {
  id: string;
  title: string;
  description: string;
  reward: number;
  category: 'Social' | 'Micro' | 'Premium';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  status: 'Draft' | 'Published';
  createdAt: string;
}

export interface Campaign {
  id: string;
  type: 'ReferAndEarn' | 'TaskCampaign';
  name: string;
  rewardPerReferral?: number;
  maxReferrals?: number;
  bonusTiers?: { referrals: number; bonus: number }[];
  associatedTaskIds?: string[];
  bonusReward?: number;
  startDate: string;
  endDate: string;
  status: 'Active' | 'Paused' | 'Draft';
  participants: number;
}

export interface User {
  id: string;
  walletAddress: string;
  earnings: number;
  referrals: number;
  joinDate: string;
  status: 'Active' | 'Banned';
}

export interface RewardTransaction {
  id: string;
  userId: string;
  amount: number;
  type: 'Task' | 'Referral' | 'Bonus' | 'Manual';
  date: string;
  status: 'Completed' | 'Pending';
}

export interface ContentSection {
  id: string;
  title: string;
  content: string;
  lastUpdated: string;
}

export const initialStats = {
  totalUsers: 14250,
  totalTasks: 45,
  activeCampaigns: 3,
  totalDistributed: 250000,
};

export const initialTasks: Task[] = [
  {
    id: 't-1',
    title: 'Follow Earnifyx on Twitter',
    description: 'Follow our official Twitter account and retweet the pinned post.',
    reward: 50,
    category: 'Social',
    difficulty: 'Easy',
    status: 'Published',
    createdAt: '2026-04-10T10:00:00Z',
  },
  {
    id: 't-2',
    title: 'Join Discord Server',
    description: 'Join our community on Discord and say hi in the general channel.',
    reward: 50,
    category: 'Social',
    difficulty: 'Easy',
    status: 'Published',
    createdAt: '2026-04-12T14:30:00Z',
  },
  {
    id: 't-3',
    title: 'Test Web3 Integration',
    description: 'Connect your wallet and perform a test transaction on the Sepolia network.',
    reward: 500,
    category: 'Premium',
    difficulty: 'Hard',
    status: 'Draft',
    createdAt: '2026-04-20T09:15:00Z',
  },
  {
    id: 't-4',
    title: 'Write a Blog Post',
    description: 'Write a 500-word article about Earnifyx and publish it on Medium.',
    reward: 1000,
    category: 'Micro',
    difficulty: 'Medium',
    status: 'Published',
    createdAt: '2026-04-15T11:00:00Z',
  }
];

export const initialCampaigns: Campaign[] = [
  {
    id: 'c-1',
    type: 'ReferAndEarn',
    name: 'Q2 Growth Spurt Referral',
    rewardPerReferral: 100,
    maxReferrals: 50,
    bonusTiers: [{ referrals: 10, bonus: 500 }, { referrals: 50, bonus: 5000 }],
    startDate: '2026-04-01T00:00:00Z',
    endDate: '2026-06-30T23:59:59Z',
    status: 'Active',
    participants: 1240,
  },
  {
    id: 'c-2',
    type: 'TaskCampaign',
    name: 'Social Media Ambassador',
    associatedTaskIds: ['t-1', 't-2'],
    bonusReward: 200,
    startDate: '2026-04-10T00:00:00Z',
    endDate: '2026-05-10T23:59:59Z',
    status: 'Active',
    participants: 850,
  },
  {
    id: 'c-3',
    type: 'ReferAndEarn',
    name: 'Early Adopter Referral',
    rewardPerReferral: 200,
    maxReferrals: 100,
    startDate: '2026-01-01T00:00:00Z',
    endDate: '2026-03-31T23:59:59Z',
    status: 'Paused',
    participants: 4500,
  }
];

export const initialUsers: User[] = [
  { id: 'u-1', walletAddress: '0x1234...5678', earnings: 1500, referrals: 12, joinDate: '2026-01-15T08:20:00Z', status: 'Active' },
  { id: 'u-2', walletAddress: '0x8765...4321', earnings: 50, referrals: 0, joinDate: '2026-04-20T10:05:00Z', status: 'Active' },
  { id: 'u-3', walletAddress: '0xabcd...efgh', earnings: 5400, referrals: 45, joinDate: '2026-02-10T14:40:00Z', status: 'Active' },
  { id: 'u-4', walletAddress: '0x9999...8888', earnings: 0, referrals: 0, joinDate: '2026-04-21T09:00:00Z', status: 'Banned' },
  { id: 'u-5', walletAddress: '0x5555...4444', earnings: 300, referrals: 2, joinDate: '2026-03-05T16:15:00Z', status: 'Active' },
];

export const initialRewards: RewardTransaction[] = [
  { id: 'r-1', userId: 'u-1', amount: 500, type: 'Bonus', date: '2026-04-18T10:00:00Z', status: 'Completed' },
  { id: 'r-2', userId: 'u-3', amount: 100, type: 'Referral', date: '2026-04-19T11:20:00Z', status: 'Completed' },
  { id: 'r-3', userId: 'u-5', amount: 50, type: 'Task', date: '2026-04-20T09:45:00Z', status: 'Completed' },
  { id: 'r-4', userId: 'u-1', amount: 1000, type: 'Manual', date: '2026-04-21T08:00:00Z', status: 'Pending' },
];

export const initialContent: ContentSection[] = [
  { id: 'home-hero', title: 'Homepage Hero Title', content: 'Welcome to Earnifyx, the premier Web3 earning platform.', lastUpdated: '2026-04-01T10:00:00Z' },
  { id: 'home-about', title: 'Homepage About Text', content: 'Earnifyx connects users with high-quality Web3 projects.', lastUpdated: '2026-03-15T09:00:00Z' },
];

import React from 'react';
import { getRecommendedTasks, Task } from '../lib/ai-engine';

const MOCK_TASKS: Task[] = [
  { id: '1', title: 'Verify Bags API Integration', category: 'Dev', reward: 0.1 },
  { id: '2', title: 'Post about AutoTask Africa on X', category: 'Social', reward: 0.02 },
  { id: '3', title: 'Stake 1 SOL in Liquid Pool', category: 'DeFi', reward: 0.05 },
];

export const AIRecommendations = ({ userInterests }: { userInterests: string[] }) => {
  const recommendations = getRecommendedTasks(userInterests, MOCK_TASKS);

  return (
    <div className="p-4 bg-gray-900 text-white rounded-xl border border-purple-500">
      <h2 className="text-xl font-bold mb-4">🤖 AI Recommended for You</h2>
      <div className="space-y-3">
        {recommendations.map(task => (
          <div key={task.id} className="p-3 bg-gray-800 rounded-lg flex justify-between items-center">
            <div>
              <p className="font-semibold">{task.title}</p>
              <span className="text-xs text-purple-400">{task.category}</span>
            </div>
            <div className="text-right">
              <p className="text-green-400">{task.reward} SOL</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

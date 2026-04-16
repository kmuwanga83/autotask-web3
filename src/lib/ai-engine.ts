/**
 * Simple AI-Matching Engine for AutoTask Web3
 */

export interface Task {
  id: string;
  title: string;
  category: 'DeFi' | 'NFT' | 'Social' | 'Dev';
  reward: number;
}

export const getRecommendedTasks = (userInterests: string[], allTasks: Task[]) => {
  return allTasks
    .map(task => {
      // Calculate a simple match score
      let score = 0;
      if (userInterests.includes(task.category)) score += 10;
      
      // Bonus: Recommend higher rewards for active users
      if (task.reward > 0.05) score += 5;
      
      return { ...task, matchScore: score };
    })
    .sort((a, b) => b.matchScore - a.matchScore) // Sort by highest match
    .slice(0, 3); // Return top 3 recommendations
};

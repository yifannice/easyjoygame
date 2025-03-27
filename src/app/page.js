/**
 * Homepage component for EasyJoy platform
 * Displays all available games with category filters
 * Serves as the main entry point for users
 */
'use client';

import { useState } from 'react';
import GameCard from '../components/GameCard';
import CategoryFilter from '../components/CategoryFilter';
import { games } from '../data/games';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // 根据选择的分类过滤游戏
  const filteredGames = selectedCategory 
    ? games.filter(game => game.categories.includes(selectedCategory))
    : games;

  return (
    <div>
      {/* 分类过滤器 */}
      <CategoryFilter 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />

      {/* 游戏网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredGames.length > 0 ? (
          filteredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))
        ) : (
          <div className="col-span-full py-12 text-center">
            <p className="text-lg text-gray-600">No games found in this category.</p>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mt-3 px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Show All Games
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 
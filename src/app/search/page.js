/**
 * Search page component for EasyJoy platform
 * Allows users to search for games by title or description
 * Displays search results with filtering options
 */
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import GameCard from '../../components/GameCard';
import CategoryFilter from '../../components/CategoryFilter';
import { searchGames } from '../../data/games';

// 搜索内容组件
function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [results, setResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Update search results when query or category changes
  useEffect(() => {
    if (query) {
      const searchResults = searchGames(query);
      
      // Filter by category if selected
      if (selectedCategory) {
        setResults(searchResults.filter(game => 
          game.categories.includes(selectedCategory)
        ));
      } else {
        setResults(searchResults);
      }
    } else {
      setResults([]);
    }
  }, [query, selectedCategory]);

  // Handle search input changes
  const [searchInput, setSearchInput] = useState(query);
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search games..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            Search
          </button>
        </div>
      </form>

      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

// 主页面组件
export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
} 
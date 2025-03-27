/**
 * Search page component for EasyJoy platform
 * Allows users to search for games by title or description
 * Displays search results with filtering options
 */
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import GameCard from '../../components/GameCard';
import CategoryFilter from '../../components/CategoryFilter';
import { searchGames } from '../../data/games';

export default function SearchPage() {
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
    <div>
      <h1 className="text-3xl font-bold mb-6">Search Games</h1>
      
      {/* Search form */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex w-full max-w-xl mx-auto">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search for games..."
            className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded-r-lg hover:bg-blue-600 transition-colors"
          >
            Search
          </button>
        </div>
      </form>
      
      {/* Search results */}
      {query && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">
              {results.length > 0 
                ? `Results for "${query}"`
                : `No results for "${query}"`}
            </h2>
            <p className="text-gray-600">{results.length} games found</p>
          </div>
          
          {results.length > 0 && (
            <>
              {/* Category filter */}
              <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
              
              {/* Results grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {results.map(game => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </>
          )}
          
          {results.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-700 mb-2">No Games Found</h3>
              <p className="text-gray-600 mb-4">Try different keywords or browse all games.</p>
              <button 
                onClick={() => router.push('/')}
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Browse All Games
              </button>
            </div>
          )}
        </div>
      )}
      
      {!query && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">Enter a search term to find games.</p>
        </div>
      )}
    </div>
  );
} 